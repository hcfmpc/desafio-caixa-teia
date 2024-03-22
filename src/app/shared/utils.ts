export class Utils {

  static normalizarTexto(textoObj: string = ''){

    textoObj = textoObj.toUpperCase();

    textoObj = textoObj.replace(/[ÀÁÂÃÄÅ]/g,"A");
    textoObj = textoObj.replace(/[ÈÉÊË]/g,"E");
    textoObj = textoObj.replace(/[ÌÍÎÏ]/g,"I");
    textoObj = textoObj.replace(/[ÒÓÔÕÖ]/g,"O");
    textoObj = textoObj.replace(/[ÙÚÛÜ]/g,"U");
    textoObj = textoObj.replace(/[Ç]/g,"C");
    textoObj = textoObj.replace(/[Ñ]/g,"N");
    textoObj = textoObj.replace(/[¡]/g,"I");

    textoObj = textoObj.replace(/&CCEDIL;/g,"C");

    return textoObj
  }
}
