
// *****************           VueJs                     **********************************


// input list  in general list : using vue.js

/*
Vue.component('general-task-list', {

	template:'<div> <slot></slot> </div>'

});

 

new Vue ({

	el: '#ToDos',
	data: {
		newtask: '',
		tasks: []
		},

	methods: {
		addTask() {

			this.tasks.push(this.newtask);
			this.newtask='';		
		}
	},
});



*/ 
// ***************************    Jquery  ******************************





$(document).ready( function()
{
	/* $('#addItem').on('click',addItem); */            /*  if you use the button submit task version */

	$('#ToDos').on('change','.completeItem',completeItem);   /* change the boxe of checkbox ( Valid or not) */
	$('#ToDos').on('click','.deleteItem',deleteItem);        /* the button to delete item */
	$('ToDos').on('click','.remove-Menu',deleteItem);
	$('#task_to-do').on('keypress', function(event){       /*  13 ->> keycode(button : Entree ) */
		if(event.keyCode === 13){							/* function when you click in keyboard Entree */
			addItem();
			event.preventDefault();
		}
	});


	// editing 
	$('#ToDos').on('click','.ToDoText',startEditing);
	$('#ToDos').on('click','.saveItem','cancelItem',stopediting);
	$('#ToDos').on('click','.cancelItem','saveItem',cancelediting);
	
	// pop up modal TodoS

	$('#ToDos').on('click','.editItem',showModal);
	$('#ToDos').on('click','.close',closeModal);

	//pop up modal accomplished 
	$('#ToDos').on('click','#accomplished-ref',showaccomplished);
	$('#ToDos').on('click','.close',closeaccomplished);






	//pop up modal PopUp Main Event 

	$('body').on('click','.close',closeMainEvent);
	




	// showing the box of tasks 
	
	$('#ToDos').on('click','#title-IU',oth);
	$('#ToDos').on('click','#title-I',oth);
	$('#ToDos').on('click','#title-U',oth);
	$('#ToDos').on('click','#title-NIU',oth);
	$('#ToDos').on('click','.general-task-title',oth);

	


	// showing / hiding ToDos

	$('#ToDos').on('click','#To-Dos-ref',showToDos);
	$('#ToDos').on('click','.close',closeToDos);
	// cancel button in modal ToDos
	$('#ToDos').on('click','.failled',closeModal);


	// Menu Option 

	// showing Option Edit / Remove  on li
	$('.custom-menu').hide();
	$('#general-task').on('contextmenu',function(event){    // disable the right click function 
		event.preventDefault();
	});
	
	// editing when we click in the menu 
	$('.custom-menu').on('click','#edit-Menu',showModal);
	$('#general-task').on('contextmenu','.ListItem',ShowMenu);  // the classe : .ListItem is created when e submit a task 
	$(document).on('click',HideMenu);








	function startEditing(event){

		var searchParent = $(this).parent();  // to get the parent in DOM


		// get the current text
		var currentText = searchParent.find('.ToDoText').text();  // find stop when she find the first element that e gave in option
		//place it inside the text box
		searchParent.find('.editText').val(currentText);
		//show the text box
		searchParent.find('.editText').show();
		searchParent.find('.saveItem').show();
		searchParent.find('.cancelItem').show();
		//hide the orriginal text
		searchParent.find('.ToDoText').hide();
	}

	function  stopediting(event){
		var searchParent = $(this).parent();
		//hide the save button
		searchParent.find('.cancelItem').hide();
		$(this).hide();
		var newvalue = searchParent.find('.editText').val();
		//hide the edit box
		searchParent.find('.editText').hide();
		// get the value from the edit box and place it in ou span
		searchParent.find('.ToDoText').text(newvalue);
		// show our span
		searchParent.find('.ToDoText').show();
	
	}

	function cancelediting(event){
		var searchParent=$(this).parent();
		// hide the cancel button 
		searchParent.find('.saveItem').hide();
		$(this).hide();
		// hide the save button
		searchParent.find('.saveItem').hide();
		//hide the edit box
		searchParent.find('.editText').hide();
		// show our span
		searchParent.find('.ToDoText').show();	
	}

	// making our list of task

	function addItem(event){   /* name of the function */
		var newToDoText = $('#task_to-do').val();   /*  grabing the value of what we write in the boxe text  and store it in a variable*/
		$('#general-task').append('<div class="ListItem"><span class="glyphicon glyphicon-calendar calendarItem" ></span><span class="ToDoText">' + newToDoText + '</span><input type="text" class="editText"><button class="btn btn-success saveItem">save</button><button class="btn btn-fail cancelItem">cancel</button></div>');     /* add what we already grab in the first funtion to the general boxe + specifying that it's a checkboxe and add an trash icone from the site of bootstrap &&   wwe link all of this to completItem class and deleteItem class */             
		$('#task_to-do').val(""); /* clear the boxe task to do to make another task  */
	}

	function deleteItem(event){  /* name of the function*/
		$(this).parent().remove(); /* select the parent of what e wanted to remove ( if we see : the <input (checkbox)>  ->  his parent in DOM is <li> so if we remove the parent, the checkboxe disappear) */
	}

	function completeItem(event){
		$(this).parent().toggleClass('done');  /* same for the previous one, just here we link it to a classe which can be modified in your css / toggle = click & unclick */
	}
		

	//  Pop Up

	function showModal(event){
		$('#modal-ToDos').fadeIn();
		$('.modal_ToDos-List').show();
	}
	
	function closeModal(event){
		$('#modal-ToDos').fadeOut();
		$('.modal_ToDos-List').fadeOut();
	}

	// Pop Up ToDos-Main

	function showToDos(event){
		$('#PopUp-ToDo-list').fadeIn();
		$('#PopUp-ToDo-list-main').show();
	}
	
	function closeToDos(event){
		$('#PopUp-ToDo-list').fadeOut();
		$('#PopUp-ToDo-list-main').fadeOut();
	}


	// accomplished Pop Up 



	function showaccomplished(event){
		$('#PopUp-accomplished-list').fadeIn();
		$('#PopUp-accomplished-list-main').show();
	}
	
	function closeaccomplished(event){
		$('#PopUp-accomplished-list').fadeOut();
		$('#PopUp-accomplished-list-main').fadeOut();
	}	



// close Main Event Pop Up 
	
	function closeMainEvent(event){
		$('#Main-PopUp').fadeOut();
		$('#Main-PopUp-main').fadeOut();
	}	



	//   hiding / showing the box tasks


	function oth (event) {
		$(this).next().toggle(400);
	}

	//   hiding / showing the different button :   calendar

	$('#general-task').on('mouseover','li',showOption);
	$('#general-task').on('mouseout','li',hideOption);

	function showOption(event){
		$(this).find('.calendarItem').css({
			'opacity':'1'
		});
		
	}

	function hideOption(event){
		$('.calendarItem').css({
			'opacity':'0'
		});
		
	}


	
	function ShowMenu(event){
		$('.custom-menu').toggle(200);
		$('.custom-menu').offset({
			left : event.pageX,
			top  : event.pageY
		});
	}

	function HideMenu(event){
		$('.custom-menu').hide();
	}	


	// Drop and drag event

	 	$('#general-task').sortable({
		containment : 'document',
		cursor : 'move',
		opacity : 0.6,
		connectWith : '#important_urgent-task, #important-task, #urgent-task, #not_important-urgent-task, #general-task'
	}); 
	$('div').disableSelection();


	 // tests  


	// removing
	$('.custom-menu').on('click','#remove-Menu',function (event) {
		var searchParent=$(this).parent();
		var sear = $(searchParent).parent();

		sear.find('lif').remove();
	});


	// try to delete in box ToDos
	
	$('#modal-ToDos').on('click','#edit-ToDos-delete',function(event){
		console.log(event);
	});


});

			// calendar 

function opacite(el,opacity)
{
    setStyle(el,"filter:","alpha(opacity="+opacity+")");
    setStyle(el,"-moz-opacity",opacity/100);
    setStyle(el,"-khtml-opacity",opacity/100);
    setStyle(el,"opacity",opacity/100);
}
function calendrier()
{
    var date = new Date();
    var jour = date.getDate();
    var moi = date.getMonth();
    var annee = date.getYear();
    var jour_calendrier=0;
    if(annee<=200)
    {
        annee += 1900;
    }
    mois = new Array('Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre');
    jours_dans_moi = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    if(annee%4 == 0 && annee!=1900)
    {
        jours_dans_moi[1]=29;
    }
    var total = jours_dans_moi[moi];
    var date_aujourdui = jour+' '+mois[moi]+' '+annee;
    var citations = ["The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees The Opportunity In Every Difficulty .- Winston Churchill", "You learn more from failure than from success. Don't let it stop you. Failure builds character", "“If you have a dream, don’t just sit there. Gather courage to believe that you can succeed and leave no stone unturned to make it a reality.” Dr Roopleen","The world makes way for the man who knows where he is going. - Ralph Emerson","Winning starts with beginning.” Anonymous","What you do makes a difference, and you have to decide what kind of difference you want to make.” - Jane Goodall","Once we accept our limits, we go beyond them. - Albert Einstein ","If you can dream it, you can do it. - Walt Disney","Life isn't about finding yourself. Life is about creating yourself. - Bernard Shaw","“It's not who you think you are that holds you back it's who you think you're not.”","Every dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.","“The first follower is an underestimated form of leadership. The first follower is what transforms a lone nut into a leader.” ― Derek Sivers"]; 
    
    document.write('<table class="cal_calendrier" onload="opacite(document.getElementById(\'cal_body\'),20);"><tbody id="cal_body"><tr><th colspan="7">'+mois[moi]+'</th></tr>');
   
    document.write('<tr>');
    for(i=0;i<=4;i++)
    {   
        jour_calendrier=jour-7+i;
        document.write('<td>'+jour_calendrier+'</td>');
        
    }
  
    document.write('</tr>');
    document.write('<tr>');
     for(i=0;i<=4;i++)
    {
        jour_calendrier=jour-2+i;
        document.write('<td>'+jour_calendrier+'</td>');
        
    }
  
    document.write('</tr>');
    document.write('<tr>');
    for(i=0;i<=4;i++)
    {
        jour_calendrier=jour+3+i;
        document.write('<td>'+jour_calendrier+'</td>');
        
    }
 
    document.write('</tr>');
    document.write('<tr>');
    for(i=0;i<=4;i++)
    {    
 
        jour_calendrier=jour+8+i;
        if (jour_calendrier>jours_dans_moi[moi]){
            jour_calendrier=0;


        }
         document.write('<td>'+jour_calendrier+'</td>');
        
    }
 

   

    /*
        $("body").on("click","td", function(){
            $(".cal_calendrier").append('<div id="notes"><p>Notes</p><textarea  name="Notes" id="Notes" rows="10" cols="20" placeholder="veuillez entrer vos notes"></textarea><menu id="menuNotes"><button id="cancel" type="reset">Annuler</button><button type="submit">Confirmer</button></menu></div>');     
        
        });*/
        $("#notes").hide();
        $("body").on("click","td", function(){
            $("#notes").show();





        });
        $("body").on("click","#cancel", function(){
            $("#notes").hide();
                });


        $("body").on("click",".incr", function(){
            $("#notess").css({
                'border-top':'5px solid red'
            })
        });
    
    document.write('</tr>');
    document.write('<th colspan=7><marquee behavior="scroll">The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees The Opportunity In Every Difficulty .- Winston Churchill</marquee> </th>');
    document.write('</tbody></table>');
    opacite(document.getElementById('cal_body'),70);
    return true;
   
}












