'use strict';
(function() {
  angular
    .module('slackOverflowApp')
    .controller('MessageFormCtrl', messageFormCtrl);

  messageFormCtrl.$inject = [];

  function messageFormCtrl() {
    this.submit = () => {
      this.onSubmit(this.message);
      this.message ='';
    }
  };
})();