import React from 'react';
import { FavoriList } from './components';
import Loading from '../../components/utils/Loading';
import { connect } from 'react-redux';
import {facListSelect, favIsLoadingSelect} from '../../store/selectors'
import {tryRemoveFavori} from '../../store/actions'
const Favoris = (props) => {
  return (
    <div className="d-flex flex-row flex-fill pt-4 p-2">
      {!props.isLoading ? (
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <FavoriList
            favoris={props.favoris}
            removeFavori={props.tryRemoveFavori}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default connect(state => ({favoris: facListSelect(state), isLoading : favIsLoadingSelect(state)}), {tryRemoveFavori})(Favoris);
