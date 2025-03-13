import Views from './views';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends Views {
  //   _parentElement = document.querySelector('.bookmarks_list');
  _errorMessage = 'No boookmarks yet. Find a nice recipe and add to bookmarks.';
  _successMesssage;

  get _parentElement() {
    return document.querySelector('.bookmarks__list');
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
