'use strict';

/**
 * @ngdoc service
 * @name clientApp.share
 * @description
 * # share
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('share', function () {
    var data;
    this.add = function(dataSend){
      data = dataSend;
    };
    this.get = function(){
      return data;
    };
  });