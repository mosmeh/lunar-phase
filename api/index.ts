import { ServerRequest, SunCalc } from '../deps.ts';

const PHASES = [
    { name: 'New Moon', emoji: '🌑' },
    { name: 'Waxing Crescent', emoji: '🌒' },
    { name: 'First Quarter', emoji: '🌓' },
    { name: 'Waxing Gibbous', emoji: '🌔' },
    { name: 'Full Moon', emoji: '🌕' },
    { name: 'Waning Gibbous', emoji: '🌖' },
    { name: 'Last Quarter', emoji: '🌗' },
    { name: 'Waning Crescent', emoji: '🌘' },
    { name: 'New Moon', emoji: '🌑' },
];

export default function requestHandler(req: ServerRequest) {
    const illum = SunCalc.getMoonIllumination(new Date());
    const index = illum.phase * (PHASES.length - 1);
    const phase = PHASES[Math.round(index)];

    req.respond({
        body: JSON.stringify({
            fraction: illum.fraction,
            phase: illum.phase,
            phase_name: phase.name,
            emoji: phase.emoji,
        }),
        headers: new Headers({
            'Content-Type': 'application/json; charset=utf-8',
        }),
    });
}
