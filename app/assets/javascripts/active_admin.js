#= require active_admin/base
$(document).ready(function (){
	
	// Init for Lock
	
	$('a[data-action="lock"]').click(function(){
		$(".dropdown_menu_list_wrapper").hide();
		if($(".ui-dialog").is(":visible")){ return true};
		setTimeout(function(){
		   $(".ui-dialog-content.ui-widget-content").css('display','none');
		},50)
	});
});