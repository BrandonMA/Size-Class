!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("react-native"),require("react-native-responsive-dimensions"),require("expo-device")):"function"==typeof define&&define.amd?define(["exports","react","react-native","react-native-responsive-dimensions","expo-device"],t):t((e=e||self).sizeClass={},e.react,e.reactNative,e.reactNativeResponsiveDimensions,e.expoDevice)}(this,function(e,t,a,i,o){var r,c,n;function l(){return"iOS"!==o.osName&&"Android"!==o.osName&&("web"===a.Platform.OS||"windows"===a.Platform.OS||"macos"===a.Platform.OS)}(r=e.WidthSize||(e.WidthSize={}))[r.compactPhone=375]="compactPhone",r[r.largePhone=667]="largePhone",r[r.compactTablet=592]="compactTablet",r[r.largeTablet=768]="largeTablet",r[r.extraLargeTablet=1366]="extraLargeTablet",r[r.compactDesktop=592]="compactDesktop",r[r.largeDesktop=826]="largeDesktop",r[r.extraLargeDesktop=1680]="extraLargeDesktop",(c=e.HeightSize||(e.HeightSize={}))[c.compactPhone=667]="compactPhone",c[c.largePhone=812]="largePhone",c[c.compactTablet=768]="compactTablet",c[c.largeTablet=834]="largeTablet",c[c.extraLargeTablet=1024]="extraLargeTablet",c[c.compactDesktop=597]="compactDesktop",c[c.largeDesktop=775]="largeDesktop",c[c.extraLargeDesktop=1050]="extraLargeDesktop",(n=e.Size||(e.Size={}))[n.compact=0]="compact",n[n.medium=1]="medium",n[n.large=2]="large",n[n.extraLarge=3]="extraLarge",e.useHeightSizeClass=function(){var a=t.useState(null),r=a[0],c=a[1],n=i.useResponsiveHeight(100);return t.useLayoutEffect(function(){o.getDeviceTypeAsync().then(function(e){return c(e)}).catch(function(e){console.log(e)})},[]),null!=r?l()?n>=e.HeightSize.extraLargeDesktop?[e.Size.extraLarge,r]:n>=e.HeightSize.largeDesktop?[e.Size.large,r]:n>=e.HeightSize.compactDesktop?[e.Size.medium,r]:[e.Size.compact,r]:r===o.DeviceType.TABLET?(console.log(n),n>=e.HeightSize.extraLargeTablet?[e.Size.extraLarge,r]:n>=e.HeightSize.largeTablet?[e.Size.large,r]:n>=e.HeightSize.compactTablet?[e.Size.medium,r]:[e.Size.compact,r]):n>=e.HeightSize.largePhone?[e.Size.medium,r]:[e.Size.compact,r]:null},e.useWidthSizeClass=function(){var a=t.useState(null),r=a[0],c=a[1],n=i.useResponsiveWidth(100);return t.useLayoutEffect(function(){o.getDeviceTypeAsync().then(function(e){return c(e)}).catch(function(e){console.log(e)})},[]),null!=r?l()?n>=e.WidthSize.extraLargeDesktop?[e.Size.extraLarge,r]:n>=e.WidthSize.largeDesktop?[e.Size.large,r]:n>=e.WidthSize.compactDesktop?[e.Size.medium,r]:[e.Size.compact,r]:r===o.DeviceType.TABLET?n>=e.WidthSize.extraLargeTablet?[e.Size.extraLarge,r]:n>=e.WidthSize.largeTablet?[e.Size.large,r]:n>=e.WidthSize.compactTablet?[e.Size.medium,r]:[e.Size.compact,r]:n>=e.WidthSize.largePhone?[e.Size.medium,r]:[e.Size.compact,r]:null}});
//# sourceMappingURL=index.umd.js.map
