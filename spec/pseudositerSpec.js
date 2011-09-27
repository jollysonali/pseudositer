describe('pseudositer', function() {

    /**
     * Load fixtures.
     **/
    loadFixtures('simple.html');

	/*
    // not currently sure how to write this spec.
    describe('if the page is loaded for the first time', function() {
		it('should initialize pseudositer', function() {
			throw 'not yet implemented';
		});
    });
    */
	
    describe('when the page is reloaded', function() {
		
		it('should throw up a loading notice', function() {
			throw 'not yet implemented';
		});
		
		describe('when the content is finished loading', function() {
			
			it('should remove the loading notice', function() {
				throw 'not yet implemented';
			});
			
			it('should transition in the content', function() {
				throw 'not yet implemented';
			});
		});
		
		describe('if there is no fragment', function() {

			beforeEach(function() {
				
			});

			it('should set fragment to #/', function() {
				throw 'not yet implemented';
			});

			it('should follow an internal link to #/', function() {
				throw 'not yet implemented';
			});

		});

		describe('if there is a fragment', function() {
			
			describe('if the fragment is a directory', function() {
				it('should load the directory listing', function() {
					throw 'not yet implemented';
				});
			});
			
			describe('if the fragment is a text file', function() {
				it('should load the text file', function() {
					throw 'not yet implemented';
				});
			});
			
			describe('if the fragment is an image', function() {
				it('should load the image', function() {
					throw 'not yet implemented';
				});
			});
			
		});
		
		describe('if there was previously content on the page', function() {
			it('should transition out the existing content', function() {
				throw 'not yet implemented';
			});
			
			it('should not destroy the existing content', function() {
				throw 'not yet implemented';
			});
		});
    });

    describe('when the user clicks on a link', function() {

		describe('if the link is not a fragment', function() {
			it('should follow the link', function() {
				throw 'not yet implemented';
			});
		});

		describe('if the link is a fragment', function() {
			it('should reload the page with the new fragment', function() {
				throw 'not yet implemented';
			});
			
			it('should change the displayed fragment', function() {
				throw 'not yet implemented';
			});

			describe('if the link has not yet been clicked', function() {
				it('should throw up a loading screen', function() {
					throw 'not yet implemented';
				});
				
			});

			describe('if the link has been clicked before', function() {
				it('should not throw up a loading screen', function() {
					throw 'not yet implemented';
				});
				
			});
		});
    });
});
