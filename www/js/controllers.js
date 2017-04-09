angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
console.log($scope.chats);
  $scope.remove = function(chat) {
      Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('VrCtrl',function($scope, $stateParams)
{
    var options = {
        databaseXmlFile: 'PluginTest.xml',
        targetList: [ 'logo', 'iceland', 'canterbury-grass', 'brick-lane' ],
        overlayMessage: 'Point your camera at a test image...',
        vuforiaLicense: 'AcFCAAD/////AAAAGYxVMHTy8EzXgq9LlgLbJO4YgGkp2eFeY1TnCsjqOmkJINYpcXLfY4ObSOetMvmQdmwznzrAoKGnIs9tEvgR+nOgrVgGiLgorpPKT/13vP4FK4/kFplgz60RcpZ/GrgbKo2E8yJEKcsuGcq4YnnPddJIvjGCWX1GfDX3p5YbdkpHGpO8neJ05jHAqX95phDRKtySfa3qTpGxojAcZGtE3s3DtNqo5KTpcHUrk2maRAhZDs9BA39cZlx9xzzvKw5yXCfykuZyENzVZZjYFh9s8y4h/oxRazRab9W3telEnbnMDa4eEp47O4bgXeoovFhVhCli+44TFsxrWqJiPI7UftHVl8JRNMratZb1Regh6oeA'
    };

    navigator.VuforiaPlugin.startVuforia(
        options,
        function(data) {
            // To see exactly what `data` can return, see 'Success callback `data` API' within the plugin's documentation.
            console.log(data);

            if(data.status.imageFound) {
                alert("Image name: "+ data.result.imageName);
            }
            else if (data.status.manuallyClosed) {
                alert("User manually closed Vuforia by pressing back!");
            }
        },
        function(data) {
            alert("Error: " + data);
        }
    );

})




.controller('TestCtrl',function($scope, $ionicPopup, $timeout) {

$scope.showPopup = function() {
    $scope.data = {};
console.log($ionicPopup);

    var myPopup = $ionicPopup.show({
        template: '<input type="password" ng-model="data.wifi">',
        title: 'Saisir le mot de passe Wi-Fi',
        scope: $scope,
        wifi: 54,
        buttons: [
            {
                text: 'Annuler'
            },
            {
                text: '<b> Enregister </b>',
                type: 'button-positive',
                onTap: function (e) {
                    if (!$scope.data.wifi) {
                        e.preventDefault();
                    } else {
                        return $scope.data.wifi;
                    }
                }
            }
        ]
    });

    myPopup.then(function (res) {
        console.log('Saisi!', res);

    });
};

$scope.showConfirm = function()
{
  var confirmPopup = $ionicPopup.confirm(
      {
    title: 'Manger une glace',
      template: 'Etes-vous sur de vouloir manger cette glace?'


  });

  confirmPopup.then(function(res)
    {
      if(res)
      {
        console.log('Vous etes sur ');
      }
      else {
        console.log('Vous n etes pas sur');
      }
    });
$scope.showAlert = function()
    {
      var alertPopup = $ionicPopup.alert({
        title: 'Ne mangez pas ça!',
          template: 'le gout semble bon'

          });

          alertPopup.then(function(res){
            console.log('Merci de ne pas avoir mangé ce cône glacé!');
          });
    };


};
})

.controller('AccountCtrl', function($scope) {
    $(document).ready(function(){
        $('.collapsible').collapsible();
    });


    $scope.settings = {

    enableFriends: false
  };
})

.controller('VideoCtrl',function($scope)
    {
        $scope.YT = {};



     $scope.PlayVideo = function()
     {
         var video = document.getElementsByTagName("video")[0];
         video.play();
     };
     $scope.PauseVideo = function()
     {
         var video = document.getElementsByTagName("video")[0];
         video.pause();
     };
        $scope.StopVideo = function()
        {
            var video = document.getElementsByTagName("video")[0];
            video.pause();
            video.currentTime = 0;
        };
        $scope.PreceVideo = function()
        {
            var video = document.getElementsByTagName("video")[0];
            video.currentTime -= parseInt(20);
        };

        $scope.SuivVideo = function()
        {
            var video = document.getElementsByTagName("video")[0];
            video.currentTime += parseInt(20);
        };





    })


.controller('PictureCtrl',function($scope)
{




});