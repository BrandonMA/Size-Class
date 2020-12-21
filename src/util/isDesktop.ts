import { Platform } from 'react-native';

export function isDesktop(): boolean {
    return (
        Platform.OS !== 'ios' &&
        Platform.OS !== 'android' &&
        (Platform.OS === 'web' || Platform.OS === 'windows' || Platform.OS === 'macos')
    );
}
