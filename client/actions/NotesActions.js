const AppDispatcher = require('../dispatcher/AppDispatcher.js');
const Constants = require('../constants/AppConstants.js');

const api = require('../api');

const NoteActions = {
    loadNotes() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_NOTES_REQUEST
        });

        api.listNotes()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_NOTES_SUCCESS,
                notes: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_NOTES_FAIL,
                error: err
            })
        );
    },

    createNote(note) {
        api.createNote(note)
        .then(() =>
            this.loadNotes()
        )
        .catch(err =>
            console.error(err)
        );
    },

    deleteNote(noteId) {
        api.deleteNote(noteId)
        .then(() =>
            this.loadNotes()
        )
        .catch(err =>
            console.error(err)
        );
    }
};

module.exports = NoteActions;
