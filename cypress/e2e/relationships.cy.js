describe('relationships', () => {
	beforeEach(() => {
		cy.login();
		cy.visit('/');
	});

	it('works', () => {
		const data = {
			apiPath: '**/api/relationships',
			path: '/relationships',
			singular: 'relationship',
			plural: 'Relationships',
		};

		cy.handlesEverything({
			...data,
			fieldsAdd: {
				autocompleteAdd: {
					person_1: ['Ken Barlow'],
					person_2: ['Mike Baldwin'],
				},
				select: {
					relationship: 'spouse',
				},
			},
			fieldsEdit: [
				{
					autocompleteRemove: {
						person_1: ['Ken Barlow'],
						person_2: ['Mike Baldwin'],
					},
					autocompleteAdd: {
						person_1: ['Steve McDonald'],
						person_2: ['Kevin Webster'],
					},
					select: {
						relationship: 'adoptive parent',
					},
				},
			],
		});

		cy.handlesEverything({
			...data,
			fieldsAdd: {
				autocompleteAdd: {
					person_1: ['Ken Barlow'],
					person_2: ['Mike Baldwin'],
				},
				select: {
					relationship: 'spouse',
					end_reason: 'annulled',
				},
				text: {
					start_date: '2001-01-01',
					end_date: '2002-02-02',
				},
				check: {
					take_last_name: true,
				},
			},
			fieldsEdit: [
				{
					autocompleteRemove: {
						person_1: ['Ken Barlow'],
						person_2: ['Mike Baldwin'],
					},
					autocompleteAdd: {
						person_1: ['Steve McDonald'],
						person_2: ['Kevin Webster'],
					},
					select: {
						relationship: 'adoptive parent',
						end_reason: 'current',
					},
					text: {
						start_date: '2003-03-03',
						end_date: '2004-04-04',
					},
					uncheck: {
						take_last_name: true,
					},
				},
			],
		});
	});
});
