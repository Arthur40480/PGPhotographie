import "./Gallery.css";

function Gallery() {
  
    return (
      <main className="gallery_main">
        <div className="main_title_container">
          <h1 className="main_title">Galerie</h1>
        </div>
        <div className="cat_container">
          <div className="txt_container">
            <h2 className="cat_title">Couleur</h2>
            <p className="cat_txt">La photographie couleur est un genre de la photographie qui utilise des techniques capables de représenter les couleurs qui sont traditionnellement produites chimiquement pendant la phase de traitement des photographies.</p>
          </div>
        </div>

        <hr></hr>

        <div className="cat_container2">
          <div className="txt_container2">
            <h2 className="cat_title">Noir et blanc</h2>
            <p className="cat_txt">Une œuvre noir et blanc allant du gris foncé (noir) au gris très clair (blanc) est une œuvre monochrome aux différentes nuances de gris</p>
          </div>  
        </div>

      </main>

    )
  }
  
  export default Gallery;
