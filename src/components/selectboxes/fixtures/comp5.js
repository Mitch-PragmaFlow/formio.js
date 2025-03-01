export default {
    type: 'form',
    components: [
        {
            label: 'Select Boxes',
            dataSrc: 'url',
            data: {
                url: 'https://cdn.rawgit.com/mshafrir/2646763/raw/states_titlecase.json'
            },
            valueProperty: 'abbreviation',
            template: '<span>{{ item.name }}</span>',
            key: 'selectBoxes',
            type: 'selectboxes',
            input: true,
            inputType: 'checkbox',
        }
    ],
    title: 'test selectBoxes Url',
	display: 'form',
	name: 'testSelectBoxesUrl',
	path: 'testSelectBoxesUrl',
};
