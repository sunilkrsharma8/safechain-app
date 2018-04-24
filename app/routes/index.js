export default Route.extend({
  beforeModel() {
    this.replaceWith('order');
  }
});