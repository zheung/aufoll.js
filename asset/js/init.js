(function() {
	d.t.pager('record', d.e.RecordPrev, d.e.RecordNext, function(pager) { d.e.RecordPage.val(pager.now); }, d.e.RecordPageMax, d.f.pageTurn);
	d.t.taber('RightNavi', d.e.TabHeadRightNavi, d.e.TabItemRightNavi, ['Basic', 'Config', 'About'], 'active');
	d.t.taber('RightNavi2', d.e.TabHeadRightNavi2, d.e.TabItemRightNavi2, ['Basic', 'Info', 'Rule', 'Elem'], 'active');

	d.e.Search.on('click', d.f.pageTurn);
})();
(function() {
	d.t.pager('record', d.e.RecordPrev, d.e.RecordNext, function(pager) { d.e.RecordPage.val(pager.now); }, d.e.RecordPageMax, d.f.pageTurn);
	d.t.taber('RightNavi', d.e.TabHeadRightNavi, d.e.TabItemRightNavi, ['Basic', 'Config', 'About'], 'active');
	d.t.taber('RightNavi2', d.e.TabHeadRightNavi2, d.e.TabItemRightNavi2, ['Basic', 'Info', 'Rule', 'Elem'], 'active');

	d.e.Search.on('click', d.f.pageTurn);

	$('.Button.AddGroup').on('click', d.f.addGroup);

	d.f.refreshClick();

	$('.Record')
	.on('mouseover', function() {
		$(this).find('.fa-pencil, .fa-trash-o').removeClass('hide');
	})
	.on('mouseout', function() {
		$(this).find('.fa-pencil, .fa-trash-o').addClass('hide');
	});

	$('.Record').on('click', d.f.editRecord);

	$('.sLink')
	.on('click', function(e) {
		e.stopPropagation();
	});

	$('.Save').on('click', d.f.saveRecord);
})();

// Init
(function() {
	d.e.Search.click();
	d.e.TabHeadRightNavi.first().click();
	d.e.TabHeadRightNavi2.first().click();
})();