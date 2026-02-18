import { hero } from '../website-content';

export const getBackgroundForTime = () => {
    const hour = new Date().getHours();
    // Morning: 03:00 - 11:59 (background_morning.webp)
    // Night: 12:00 - 02:59 (background_night.mp4)

    if (hour >= 3 && hour < 12) {
        return hero.bgImageMorning;
    } else {
        return hero.bgImageNight;
    }
};
