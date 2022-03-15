describe('people', () => {
	it('works', () => {
		let timestamp = (new Date()).getTime();
		const data = {
			apiPath: '**/api/people',
			path: '/people',
			singular: 'person',
			plural: 'People',
		};

		cy.login();
		cy.handlesEverything({
			...data,
			fieldsAdd: {
				text: {
					first_name: `Aaa ${timestamp}`,
					last_name: 'Aaa',
				},
				autopopulate: {
					slug: `aaa-${timestamp}-aaa`,
				},
			},
			fieldsEdit: [
				{
					text: {
						first_name: `Bbb ${timestamp}`,
						last_name: 'Bbb',
					},
					autopopulate: {
						slug: `bbb-${timestamp}-bbb`,
					},
				},
			],
		});

		timestamp = (new Date()).getTime();
		cy.handlesEverything({
			...data,
			fieldsAdd: {
				text: {
					first_name: `Aaa ${timestamp}`,
					last_name: 'Aaa',
					birthdate: '2001-01-01',
					deathdate: '2002-02-02',
					num_appearances: '1',
					appearances_date: '2003-03-03',
				},
				check: {
					is_current: true,
				},
				radio: {
					gender: 'M',
				},
				fileAdd: {
					filename: {
						source: 'ken-barlow.jpg',
						dest: `/uploads/person/aaa-${timestamp}-aaa.jpg`,
					},
				},
				autopopulate: {
					slug: `aaa-${timestamp}-aaa`,
				},
			},
			fieldsEdit: [
				{
					text: {
						first_name: `Bbb ${timestamp}`,
						last_name: 'Bbb',
						birthdate: '2004-04-04',
						deathdate: '2005-05-05',
						num_appearances: '2',
						appearances_date: '2006-06-06',
					},
					uncheck: {
						is_current: true,
					},
					radio: {
						gender: 'F',
					},
					fileRemove: {
						filename: true,
					},
					fileAdd: {
						filename: {
							source: 'gail-potter.jpg',
							dest: `/uploads/person/bbb-${timestamp}-bbb.jpg`,
						},
					},
					autopopulate: {
						slug: `bbb-${timestamp}-bbb`,
					},
				},
			],
		});
	});
});
