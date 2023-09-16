import {
	handlesAdd,
	handlesAddErrors,
	handlesDelete,
	handlesEdit,
	handlesEditErrors,
	handlesIndex,
	handlesIndexErrors,
	handlesViewErrors,
	setupInterceptions,
} from '../support/commands';

describe('relationships', () => {
	beforeEach(() => {
		cy.login();
		cy.visit('/');
	});

	const data = {
		apiPath: '**/api/relationships',
		path: '/relationships',
		singular: 'relationship',
		plural: 'Relationships',
		formWait: {
			getPeople: '**/api/people?*',
		},
		waitFn: () => {
			cy.wait('@getPeople').its('response.statusCode').should('equal', 200);
		},
	};

	it('works', () => {
		setupInterceptions(data);
		handlesIndex(data);
		cy.get('[data-cy="add"]').click();

		handlesAdd({
			...data,
			fields: {
				autocompleteAdd: {
					person_1: ['Ken Barlow'],
					person_2: ['Mike Baldwin'],
				},
				select: {
					relationship: 'spouse',
				},
			},
		});
		handlesEdit({
			...data,
			fields: {
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
		});
		handlesDelete(data);

		cy.get('[data-cy="add"]').click();
		handlesAdd({
			...data,
			fields: {
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
		});
		handlesEdit({
			...data,
			fields: {
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
		});
		handlesDelete(data);
	});

	const errorData = {
		...data,
		fields: {
			autocompleteAdd: {
				person_1: ['Ken Barlow'],
				person_2: ['Mike Baldwin'],
			},
			select: {
				relationship: 'spouse',
			},
		},
		fieldsEdit: {
			select: {
				relationship: 'parent',
			},
		},
	};

	it('handles index errors', () => {
		handlesIndexErrors(errorData);
	});

	it('handles add errors', () => {
		handlesAddErrors(errorData);
	});

	it('handles view errors', () => {
		handlesViewErrors(errorData);
	});

	it('handles edit errors', () => {
		handlesEditErrors(errorData);
	});

	// TODO: Create people rather than using existing people.
	// TODO: Error loading people.
});
