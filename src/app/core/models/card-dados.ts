export default class CardDados {

  public nomeAlbum: string;
  public nomeTitulo: string;
  public albumId: number;
  public id: number;
  public title: string;
  public url: string;
  public thumbnailUrl: string;

  constructor(nomeAlbum: string, nomeTitulo: string, albumId: number, id: number, title: string, url: string, thumbnailUrl: string) {

    this.nomeAlbum = nomeAlbum;
    this.nomeTitulo = nomeTitulo;
    this.albumId = albumId;
    this.id = id;
    this.title = title;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl;
  }
}

// {
//   "albumId": 1,
//   "id": 1,
//   "title": "accusamus beatae ad facilis cum similique qui sunt",
//   "url": "https://via.placeholder.com/600/92c952",
//   "thumbnailUrl": "https://via.placeholder.com/150/92c952"
// },