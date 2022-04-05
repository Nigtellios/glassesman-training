/**
 * Articles Object intended to return various data about articles
 * @type {{init(): void, printLength(*, *): void, getLength(*): number}}
 */
const articles = {
  /**
   * Object init
   */
  init() {
    articles.printLength('product__tile', 'articlesNumber');
  },

  /**
   * PrintLength - finds array with elements and prints their number
   * @param { string } tileClass
   * @param { string } scopeElement
   */
  printLength(tileClass, scopeElement) {
    let results = articles.getLength(tileClass);
    document.getElementById(scopeElement).innerHTML = `${ results }`;
  },

  /**
   * Finds length of specified element
   * @param { string } tileClass
   * @returns {number}
   */
  getLength(tileClass) {
    return document.getElementsByClassName(tileClass).length;
  },
};

export default articles;

