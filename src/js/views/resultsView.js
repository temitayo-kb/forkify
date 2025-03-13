import Views from './views';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class ResultsView extends Views {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe found for your query! Please try again.';
  _messsage;

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
