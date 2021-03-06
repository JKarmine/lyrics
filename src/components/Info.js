import React from 'react';
import PropTypes from 'prop-types';

const Info = ({info}) => {
    const { strArtistThumb, strGenre, strBiographyES, strBiographyEN } = info;
    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información del artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="foto artista"/>
                <p className="card-text">{strBiographyES ? 'Género' : 'Genre'}: {strGenre}</p>
                <h2 className="card-text">{strBiographyES ? 'Biografia' : 'Biography'}:</h2>
                <p className="card-text">{strBiographyES ? strBiographyES : strBiographyEN}</p>
                <p className="card-text">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
    );
}

Info.propTypes = {
    info: PropTypes.object.isRequired,
};
 
export default Info;