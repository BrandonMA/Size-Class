import { osName } from 'expo-device';
import { Platform } from 'react-native';

export function isDesktop(): boolean {
    return osName !== 'iOS' && osName !== 'Android' && (Platform.OS === 'web' || Platform.OS === 'windows' || Platform.OS === 'macos');
}
