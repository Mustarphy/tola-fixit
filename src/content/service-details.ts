import type { ServiceSlug } from '@/content/service-slugs';

export interface ServiceDetails {
  intro: string[];
  signs: string[];
  checks: string[];
  work: string[];
}

export const serviceDetails: Record<ServiceSlug, ServiceDetails> = {
  'oil-change': {
    intro: [
      'Engine oil lubricates moving parts, carries heat away from the engine and holds dirt in suspension until it can be drained. Over time and mileage it breaks down and becomes contaminated, and it stops doing that job well.',
      'Replacing the oil and oil filter at sensible intervals is one of the simplest ways to reduce engine wear. The right interval depends on your vehicle, the oil it uses and how you drive, so your owner’s manual is the best starting point.',
    ],
    signs: [
      'Your vehicle has reached the mileage or time interval in its service schedule',
      'The oil warning light comes on or the oil level keeps dropping',
      'The oil on the dipstick looks very dark, gritty or sludgy',
      'The engine sounds louder or rougher than usual',
      'You have recently bought a used vehicle with no clear service history',
    ],
    checks: [
      'Current oil level and condition before draining',
      'Signs of oil leaks around the engine and drain plug',
      'Air filter condition',
      'Other fluid levels, such as coolant and brake fluid',
      'Visible belts and hoses for obvious wear',
    ],
    work: [
      'Draining the old engine oil',
      'Replacing the oil filter',
      'Refilling with oil of the grade and specification your vehicle requires',
      'Checking the level after refilling and confirming there are no leaks',
      'Recommending other filter replacements where they are due',
    ],
  },
  'general-maintenance': {
    intro: [
      'Most breakdowns start as small, predictable wear: a belt that cracks, a filter that clogs or a fluid that is never changed. Preventive maintenance deals with these items on a schedule, before they leave you stranded.',
      'General maintenance covers the routine work outside of a basic oil change, following your vehicle’s service schedule and its actual condition.',
    ],
    signs: [
      'Your vehicle is due for a scheduled service',
      'It has been a long time since the vehicle was last serviced',
      'Wipers smear or judder across the windscreen',
      'You hear squealing from the engine bay when starting or turning',
      'The vehicle is preparing for a long journey',
    ],
    checks: [
      'Service history against the manufacturer’s schedule',
      'Drive belts for cracks, glazing and tension',
      'Air, fuel and cabin filters',
      'Gearbox, brake, coolant and power-steering fluids',
      'Wiper blades, lights and visible underbody condition',
    ],
    work: [
      'Replacing worn drive belts',
      'Gear oil and other fluid changes',
      'Spark plug replacement on petrol engines',
      'Filter replacements',
      'Wiper blade replacement and underbody protection where appropriate',
    ],
  },
  'vehicle-inspection': {
    intro: [
      'A vehicle inspection gives you an honest picture of your vehicle’s condition. It is useful before a long trip, after buying a used car, or simply when you want to know what needs attention soon and what can wait.',
      'The inspection works through the main systems in a consistent order so nothing important is missed, and the findings are explained in plain language.',
    ],
    signs: [
      'You are planning a long journey',
      'You are buying or have just bought a used vehicle',
      'The vehicle has not been checked in a long time',
      'Something feels different, but there is no obvious fault',
      'You want to plan and budget for upcoming maintenance',
    ],
    checks: [
      'Brakes, tyres and wheels',
      'Engine oil, coolant, brake and other fluid levels',
      'Battery condition, lights and indicators',
      'Cooling system, hoses and drive belts',
      'Suspension, steering, wipers and air conditioning',
    ],
    work: [
      'A system-by-system visual and functional check',
      'A summary of what is in good condition',
      'A prioritised list of items needing attention',
      'Recommendations on which issues are urgent and which can be scheduled',
    ],
  },
  'vehicle-diagnostics': {
    intro: [
      'Many drivers know something is wrong without knowing what it is: a warning light, a new noise or a change in how the vehicle drives. Diagnostics is about finding the actual cause rather than replacing parts and hoping.',
      'Modern vehicles store fault codes that point towards a problem area. A code is a starting point, not an answer, so it is combined with hands-on checks and a road test where needed to confirm the fault.',
    ],
    signs: [
      'A warning light is on, such as check engine, ABS or battery',
      'The vehicle is hard to start, stalls or idles roughly',
      'You notice new noises, vibrations or smells',
      'Fuel consumption has increased without explanation',
      'The vehicle has lost power or is not driving as it should',
    ],
    checks: [
      'Stored and pending fault codes from the vehicle’s computer',
      'Live sensor data while the engine is running',
      'Related components, wiring and connections',
      'The symptoms you describe, confirmed on a road test where needed',
    ],
    work: [
      'Identifying the most likely cause of the fault',
      'Explaining the findings and the repair options',
      'Clearing fault codes once a repair has been completed',
      'Re-checking that the fault does not return',
    ],
  },
  'engine-repair': {
    intro: [
      'Engine problems rarely fix themselves, and small faults can become expensive ones if the vehicle keeps being driven. Catching a misfire, leak or unusual noise early usually means a simpler repair.',
      'Engine repair starts with diagnosis, so the work carried out addresses the cause and not just the symptom.',
    ],
    signs: [
      'The check engine light is on or flashing',
      'The engine misfires, shakes or idles unevenly',
      'You see oil or coolant leaks under the vehicle',
      'There is blue, white or black smoke from the exhaust',
      'The engine knocks, ticks or has lost power',
    ],
    checks: [
      'Fault codes and live engine data',
      'Ignition components, including spark plugs and coils',
      'Fuel delivery, injectors and air intake',
      'Gaskets, seals and hoses for leaks',
      'Engine mounts, belts and timing components where accessible',
    ],
    work: [
      'Replacing faulty ignition, fuel or sensor components',
      'Repairing oil and coolant leaks',
      'Gasket and seal replacement',
      'Drive belt and related component replacement',
      'Further mechanical repair where the diagnosis calls for it',
    ],
  },
  'auto-electrical': {
    intro: [
      'Vehicles depend on their electrical systems for everything from starting the engine to running lights, sensors and comfort features. Electrical faults can be intermittent and frustrating, so methodical testing matters.',
      'Auto electrical work covers the battery, starting and charging systems, lighting and the wiring that connects them.',
    ],
    signs: [
      'The engine cranks slowly or will not start',
      'The battery warning light comes on while driving',
      'Headlights dim or flicker',
      'Bulbs, indicators or accessories stop working',
      'Fuses keep blowing or the battery keeps going flat',
    ],
    checks: [
      'Battery health and terminal condition',
      'Alternator charging output',
      'Starter motor operation',
      'Fuses, relays and earth connections',
      'Lighting circuits and visible wiring',
    ],
    work: [
      'Battery testing and replacement',
      'Bulb and lighting repairs',
      'Starter and alternator repair or replacement',
      'Tracing and repairing wiring faults',
      'Finding the cause of unexplained battery drain',
    ],
  },
  'brake-repair': {
    intro: [
      'Your brakes are the most important safety system on your vehicle. Pads and discs wear with every stop, and brake fluid absorbs moisture over time, which can reduce braking performance.',
      'Regular brake checks catch wear before it affects stopping distance or damages other components.',
    ],
    signs: [
      'Squealing, grinding or scraping when braking',
      'The brake pedal feels soft, spongy or travels further than usual',
      'The steering wheel or pedal vibrates when braking',
      'The vehicle pulls to one side when you brake',
      'The brake warning light is on',
    ],
    checks: [
      'Brake pad thickness and wear pattern',
      'Disc condition, scoring and thickness',
      'Brake fluid level and condition',
      'Calipers, hoses and brake lines for leaks or damage',
      'Handbrake operation',
    ],
    work: [
      'Brake pad replacement',
      'Brake disc replacement or servicing',
      'Brake fluid replacement and bleeding',
      'Caliper servicing',
      'Brake system diagnostics where a warning light is on',
    ],
  },
  'tyre-services': {
    intro: [
      'Tyres are the only part of your vehicle that touches the road, so their condition affects grip, braking, handling and fuel use. Underinflation, damage and uneven wear all reduce how well they perform.',
      'Tyre services cover everything from a quick pressure check to repairing a puncture or fitting replacements.',
    ],
    signs: [
      'A tyre keeps losing pressure or has a puncture',
      'Tread is worn low or wearing unevenly',
      'You can see cuts, bulges or cracks in the sidewall',
      'The vehicle vibrates at certain speeds',
      'A valve is damaged or leaking',
    ],
    checks: [
      'Tread depth and wear pattern',
      'Sidewall condition',
      'Tyre pressures, including the spare',
      'Valves and valve caps',
      'Wheel rims for visible damage',
    ],
    work: [
      'Puncture repair where the damage is repairable',
      'Tyre replacement and fitting',
      'Inner tube replacement for tubed tyres',
      'Valve replacement',
      'Setting tyre pressures to the vehicle’s specification',
    ],
  },
  'wheel-balancing': {
    intro: [
      'No wheel and tyre is perfectly even in weight. Small imbalances become noticeable vibrations as speed increases, and over time they cause uneven tyre wear and extra strain on suspension parts.',
      'Balancing measures each wheel as it spins and corrects the imbalance with small counterweights.',
    ],
    signs: [
      'The steering wheel shakes at certain speeds',
      'You feel vibration through the seat or floor',
      'Tyres are wearing in patches or scallops',
      'New tyres have recently been fitted',
      'A balance weight has fallen off a wheel',
    ],
    checks: [
      'Each wheel and tyre for damage before balancing',
      'Existing balance weights',
      'Wheel rims for bends or buckles',
      'Tyre wear pattern for signs of other issues',
    ],
    work: [
      'Measuring the imbalance on each wheel',
      'Removing old weights and fitting new counterweights',
      'Re-checking the balance after correction',
      'Advising if a bent rim or tyre fault is the real cause',
    ],
  },
  'wheel-alignment': {
    intro: [
      'Wheel alignment sets the angles of your wheels relative to each other and to the road. Potholes, kerbs and worn suspension parts can knock these angles out of specification.',
      'Poor alignment makes the vehicle pull, wears tyres unevenly and can make steering feel vague. Correcting it restores straight-line stability and protects your tyres.',
    ],
    signs: [
      'The vehicle pulls to one side on a straight road',
      'The steering wheel is off-centre when driving straight',
      'Tyres are wearing on the inner or outer edges',
      'You recently hit a deep pothole or kerb',
      'Steering or suspension parts have been replaced',
    ],
    checks: [
      'Current alignment angles against the vehicle’s specification',
      'Tyre wear patterns',
      'Steering and suspension components for wear that affects alignment',
    ],
    work: [
      'Adjusting the alignment angles to specification',
      'Centring the steering wheel',
      'A road test to confirm the vehicle tracks straight',
      'Recommending repairs if worn parts prevent correct alignment',
    ],
  },
  'suspension-steering': {
    intro: [
      'Suspension and steering keep your tyres in contact with the road and give you control over where the vehicle goes. Rough roads put these parts under constant stress, and worn components affect comfort, handling and braking.',
      'A thorough check identifies which parts are worn, so only the components that need attention are replaced.',
    ],
    signs: [
      'Knocking or clunking over bumps',
      'The vehicle bounces or rolls excessively',
      'Steering feels loose, heavy or wanders',
      'One corner of the vehicle sits lower than the others',
      'Uneven tyre wear that alignment alone does not fix',
    ],
    checks: [
      'Shock absorbers and springs',
      'Control arms, bushes and ball joints',
      'Stabiliser links and anti-roll bar mounts',
      'Steering rack, tie-rod ends and power-steering fluid',
      'Wheel bearings',
    ],
    work: [
      'Shock absorber replacement',
      'Ball joint, bush and control arm replacement',
      'Stabiliser link replacement',
      'Steering component repair',
      'Wheel alignment after suspension or steering work',
    ],
  },
  'air-conditioning': {
    intro: [
      'In hot weather, a working air conditioning system matters for comfort and for staying alert on long drives. A/C systems lose refrigerant slowly over time, and components such as the compressor, condenser and fans can develop faults.',
      'A/C service starts by finding out why the system is not cooling, rather than simply adding gas that may leak out again.',
    ],
    signs: [
      'The A/C blows warm or only slightly cool air',
      'Cooling gets weaker on hot days or in traffic',
      'Unpleasant smells come from the vents',
      'You hear unusual noises when the A/C is switched on',
      'Airflow from the vents is weak',
    ],
    checks: [
      'Vent temperature and system pressures',
      'Compressor and clutch operation',
      'Condenser, cooling fans and visible pipework',
      'The system for refrigerant leaks',
      'Cabin air filter condition',
    ],
    work: [
      'A/C system diagnostics',
      'Refrigerant recovery and recharge to the correct amount',
      'Compressor oil top-up and leak testing',
      'Cabin air filter replacement',
      'Repair or replacement of faulty A/C components',
    ],
  },
  'cooling-radiator': {
    intro: [
      'The cooling system keeps your engine at a safe working temperature. If it fails, an engine can overheat quickly, and overheating can cause serious and costly damage.',
      'Coolant also loses its protective properties over time, so the system needs periodic checks and fresh coolant, not just topping up.',
    ],
    signs: [
      'The temperature gauge reads higher than normal',
      'Steam comes from under the bonnet',
      'Coolant level keeps dropping',
      'You see green, orange or pink fluid under the vehicle',
      'The radiator fan does not seem to come on',
    ],
    checks: [
      'Coolant level, strength and condition',
      'Radiator and radiator cap',
      'Hoses and clamps for cracks or leaks',
      'Cooling fan operation',
      'Water pump and thermostat where symptoms point to them',
    ],
    work: [
      'Coolant top-up or full replacement',
      'Radiator cap replacement',
      'Hose and clamp replacement',
      'Diagnosing and repairing the cause of overheating',
      'Radiator, fan, thermostat or water pump repair where needed',
    ],
  },
};
