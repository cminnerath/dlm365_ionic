angular.module('starter.services', [])

.factory('Mini', function($resource) {
  return $resource("http://localhost:3000/minis/:id.json");
})
