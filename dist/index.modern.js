import{useResponsiveWidth as e,useResponsiveHeight as o}from"react-native-responsive-dimensions";var a,t,c;function r(){var o=e(100);return o>=a.largeDesktop?a.largeDesktop:o>=a.compactDesktop?a.compactDesktop:o>=a.largeTablet?a.largeTablet:o>=a.compactTablet?a.compactTablet:o>=a.largePhone?a.largePhone:a.compactPhone}function p(){var e=o(100);return e>=t.largeDesktop?t.largeDesktop:e>=a.compactDesktop?t.compactDesktop:e>=t.largePhone?t.largePhone:t.compactPhone}function n(){return[r(),p()]}!function(e){e[e.compactPhone=812]="compactPhone",e[e.largePhone=896]="largePhone",e[e.compactTablet=768]="compactTablet",e[e.largeTablet=1024]="largeTablet",e[e.compactDesktop=1680]="compactDesktop",e[e.largeDesktop=2048]="largeDesktop"}(a||(a={})),function(e){e[e.compactPhone=667]="compactPhone",e[e.largePhone=812]="largePhone",e[e.compactDesktop=945]="compactDesktop",e[e.largeDesktop=1152]="largeDesktop"}(t||(t={})),function(e){e[e.compact=375]="compact",e[e.medium=414]="medium",e[e.large=768]="large",e[e.extraLarge=1024]="extraLarge"}(c||(c={}));export{t as HeightSize,c as SizeClass,a as WidthSize,p as useHeightSizeClass,n as useSizeClass,r as useWidthSizeClass};
//# sourceMappingURL=index.modern.js.map