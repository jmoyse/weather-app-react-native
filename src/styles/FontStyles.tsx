import { Platform } from 'react-native';


export default class FontStyles {
    public static Standard: string = (Platform.OS === 'ios') ? 'Helvetica Neue' : 'Lato-Regular';
    public static Thin: string = (Platform.OS === 'ios') ? 'HelveticaNeue-Thin' : 'Lato-Light';
    public static UltraThin: string = (Platform.OS === 'ios') ? 'HelveticaNeue-UltraLight' : 'Lato-Hairline';
    public static Bold: string = (Platform.OS === 'ios') ? 'Helvetica-Bold' : 'Lato-Bold';
}

// original helvetica fonts
//fontFamily: (Platform.OS === 'ios') ? 'Helvetica Neue LT Std' : 'HelveticaNeueLTStd_Th', // Helvetica Neue LT Std 35 Thin -- Weight 100
//fontFamily: (Platform.OS === 'ios') ? 'Helvetica Neue LT Std' : 'HelveticaNeueLTStd_Lt', // Helvetica Neue LT Std 45 Light -- Weight 300



