/* script.js */

// --- DATA STORE ---
const db = {
    physics: {
        unit10: [
            { q: "Why is water used in radiators of automobile as coolant?", o: ["It is easily available", "It is low cost or free", "It has large specific heat", "It has oxygen"], a: 2, e: "Water has a very high specific heat capacity (4200 J/kg K), meaning it can absorb a large amount of heat energy without a significant rise in temperature, making it an ideal coolant.", d: "<strong>Specific Heat Capacity:</strong> The amount of heat required to raise the temperature of 1 kg of a substance by 1 K." },
            { q: "Which of the following situations is the best example of conduction?", o: ["A metal spoon becomes hot when placed in boiling water", "Warm air rising near a heater", "Sunlight warming the surface of the Earth", "A microwave oven heating food"], a: 0, e: "Conduction is the transfer of heat through direct contact. In this example, the metal spoon is in contact with boiling water, so heat travels from the hot water into the spoon.", d: "<strong>Conduction:</strong> Heat transfer through direct contact of particles without movement of the material itself." },
            { q: "Which combination of heat transfer methods would be dominant when you place your hands near, but not touching, a fire?", o: ["Conduction and radiation", "Convection and conduction", "Radiation and convection", "Conduction and insulation"], a: 2, e: "Heat reaches your hands sideways primarily by radiation (infrared waves) and upwards by convection (rising hot air).", d: "<strong>Radiation:</strong> Heat transfer via electromagnetic waves.<br><strong>Convection:</strong> Heat transfer via fluid movement." },
            { q: "What is symbol and what is unit for the heat capacity of an object?", o: ["C, J/°C", "J kg⁻¹ K⁻¹", "J kg K⁻¹", "J kg⁻¹ K"], a: 0, e: "Heat Capacity is denoted by 'C' and is defined as the heat required to raise the temperature of an entire object by 1 K (or 1°C). Its unit is Joules per Kelvin (J/K) or Joules per Celsius (J/°C).", d: "<strong>Heat Capacity (C):</strong> C = Q / ΔT." },
            { q: "If the same amount of heat energy is supplied to equal masses of water and copper, why does the temperature of copper increase faster?", o: ["Copper has a lower specific heat capacity", "Water is a poor conductor of heat", "Convection in water dissipates heat energy quickly", "Radiation from water is stronger"], a: 0, e: "Copper has a much lower specific heat capacity than water. This means it requires less energy to raise its temperature, so it heats up faster for the same energy input.", d: "<strong>Specific Heat:</strong> Low specific heat means rapid temperature change." },
            { q: "The transfer of heat that takes place because of density difference in fluids is", o: ["Conduction", "Radiation", "Convection", "Insulation"], a: 2, e: "When a fluid is heated, it expands, becomes less dense, and rises. Cooler, denser fluid sinks to take its place, creating a convection current.", d: "<strong>Convection Current:</strong> The flow of fluid caused by density differences due to temperature changes." },
            { q: "Which of the following statements best explains why the Earth experiences more heat from the Sun than the Moon, despite being almost the same distance away?", o: ["Earth is better conductor than the moon", "The Earth has greenhouse gases", "The Moon reflects most of the Sun's radiation", "Moon traps heat effectively"], a: 1, e: "The Earth has an atmosphere containing greenhouse gases (like CO₂ and methane) that trap heat radiating from the surface, keeping the planet warmer than the Moon which has no atmosphere.", d: "<strong>Greenhouse Effect:</strong> The trapping of the sun's warmth in a planet's lower atmosphere." },
            { q: "Dull black colour on a surface is the best absorber of radiation, which of the following is the best radiator?", o: ["Dull black surface", "Shining silver surface", "Red Coloured Surface", "White surface"], a: 0, e: "A good absorber is also a good radiator. Dull black surfaces absorb radiation efficiently and also emit (radiate) heat efficiently.", d: "<strong>Radiator:</strong> An object that emits or gives off energy as radiation." },
            { q: "How does the enhanced greenhouse effect contribute to global warming?", o: ["It increases the Earth's ability to reflect solar radiation", "It traps more heat in the Earth's atmosphere, raising global temperatures", "It blocks ultraviolet rays from entering the atmosphere", "It increases the Earth's rotation speed, causing heat buildup"], a: 1, e: "Excess greenhouse gases thicken the atmospheric 'blanket', trapping more infrared radiation emitted by Earth and preventing it from escaping to space, thus raising global temperatures.", d: "<strong>Global Warming:</strong> The long-term heating of Earth's climate system." },
            { q: "What is the primary driving force behind the movement of tectonic plates?", o: ["Gravitational pull of the Moon", "Solar radiation", "Mantle convection currents", "Magnetic field of the Earth"], a: 2, e: "Heat from the Earth's core causes molten rock in the mantle to move in convection currents. These currents drag the tectonic plates floating on top of them.", d: "<strong>Mantle Convection:</strong> Slow creeping motion of Earth's solid silicate mantle caused by convection currents." },
            { q: "Which layer of the Earth is composed of partially molten rock that can flow slowly?", o: ["Lithosphere", "Asthenosphere", "Mesosphere", "Outer core"], a: 1, e: "The asthenosphere is the upper layer of the earth's mantle, below the lithosphere, where there is relatively low resistance to plastic flow and convection is thought to occur.", d: "<strong>Asthenosphere:</strong> The mechanically weak, ductile region of the upper mantle." },
            { q: "Which of the following extreme weather events is most directly associated with rising sea levels?", o: ["Tornadoes", "Wildfires", "Hurricanes", "Earthquakes"], a: 2, e: "Rising sea levels provide a higher base for storm surges to build upon, making the flooding caused by hurricanes (cyclones) much more devastating.", d: "<strong>Hurricane:</strong> A storm with a violent wind, in particular a tropical cyclone." }
        ],
        unit11: [
            { q: "During a hot summer day, a metal bridge might expand slightly. This expansion is caused by:", o: ["the bridge rusting and weakening.", "the metal atoms in the bridge vibrating more intensely.", "the weight of cars driving over the bridge.", "a decrease in the air pressure around the bridge."], a: 1, e: "As temperature increases, atoms vibrate with greater amplitude, taking up more space and causing the material to expand.", d: "<strong>Thermal Expansion:</strong> The tendency of matter to change its shape, area, volume, and density in response to a change in temperature." },
            { q: "Fog forms on a cold window pane in the morning. Which change of state is occurring?", o: ["Melting", "Boiling", "Condensation", "Deposition"], a: 2, e: "Water vapor (gas) in the air comes in contact with the cold glass and loses heat, turning into liquid water droplets.", d: "<strong>Condensation:</strong> The change of the physical state of matter from the gas phase into the liquid phase." },
            { q: "Which process involves the change of state from a gas to a solid without passing through the liquid phase?", o: ["Deposition", "Melting", "Freezing", "Sublimation"], a: 0, e: "Deposition is the direct phase transition from gas to solid, skipping the liquid state (e.g., frost forming).", d: "<strong>Deposition:</strong> Gas → Solid." },
            { q: "Boiling point of water is:", o: ["212 °C", "212 °F", "100 K", "373 °C"], a: 1, e: "Water boils at 100°C, which converts to 212°F. (Formula: F = C*9/5 + 32).", d: "<strong>Boiling Point:</strong> The temperature at which a liquid boils and turns to vapor." },
            { q: "Jkg⁻¹K⁻¹ is the unit of:", o: ["specific Heat Capacity", "heat Capacity", "latent Heat of Fusion", "heat Energy"], a: 0, e: "Joules per kilogram per Kelvin (J/kg·K) is the standard SI unit for Specific Heat Capacity.", d: "<strong>Specific Heat Capacity:</strong> Energy to raise 1kg by 1K." },
            { q: "Evaporation takes place from:", o: ["surface", "bottom", "center", "any location"], a: 0, e: "Evaporation is a surface phenomenon where high-energy molecules escape from the liquid surface.", d: "<strong>Evaporation:</strong> Vaporization of a liquid that occurs from the surface of a liquid into a gaseous phase." },
            { q: "Relation between linear (α) and volume (β) expansion of solids is:", o: ["β = α/3", "β = 1.5α", "α = β/3", "α = 3β"], a: 2, e: "Volume expansion coefficient (β) is three times the linear expansion coefficient (α) for isotropic solids. So β = 3α or α = β/3.", d: "<strong>Linear Expansion (α):</strong> Expansion in length.<br><strong>Volume Expansion (β):</strong> Expansion in volume." },
            { q: "Heat added to a substance, at its melting point, is used to:", o: ["Increase K. E. of particle.", "decrease K. E. of particles", "increase the attraction between particles", "decrease the attraction between particles"], a: 3, e: "At the melting point, heat energy is used to overcome (decrease) the intermolecular forces of attraction to change the state, not to increase kinetic energy (temperature).", d: "<strong>Latent Heat:</strong> Heat absorbed or released during a phase change at constant temperature." },
            { q: "336 J/g is latent heat of fusion of a material. How much heat is required to melt 10 g of material at its melting point?", o: ["336 J", "3360 J", "33600 J", "3.36 x 10⁵ J"], a: 1, e: "Q = m × Lf. Q = 10g × 336 J/g = 3360 J.", d: "<strong>Latent Heat of Fusion (Lf):</strong> Heat required to melt unit mass of solid." },
            { q: "Which of the following factors increases the rate of evaporation?", o: ["Decrease in temperature", "Increase in humidity", "Increase in wind speed", "Decrease in surface area"], a: 2, e: "Wind blows away the water vapor above the liquid surface, preventing saturation and allowing more molecules to escape.", d: "<strong>Factors affecting Evaporation:</strong> Surface area, Temperature, Wind speed, Humidity." },
            { q: "What is value of α for a solid if its β is 9 x 10⁻⁵ K⁻¹?", o: ["3 x 10⁻⁵ K⁻¹", "4.5 x 10⁻⁵ K⁻¹", "9 x 10⁻⁵ K⁻¹", "27 x 10⁻⁵ K⁻¹"], a: 0, e: "Since β = 3α, then α = β / 3. α = (9 x 10⁻⁵) / 3 = 3 x 10⁻⁵ K⁻¹.", d: "<strong>Coefficient of Linear Expansion (α):</strong> Fractional change in length per degree change in temperature." },
            { q: "The process that involves the latent heat of vaporization is:", o: ["Melting of ice", "Freezing of water", "Evaporation", "Condensation of steam"], a: 2, e: "Latent heat of vaporization is the energy required to change liquid to gas. Evaporation involves this change.", d: "<strong>Latent Heat of Vaporization:</strong> Energy required for Liquid → Gas transition." },
            { q: "The sum and difference of the coefficient of real and apparent expansion of a liquid are in the ratio 2:1. The ratio of the coefficient of real expansion and apparent expansion must be:", o: ["1:1", "2:1", "2:3", "3:1"], a: 3, e: "Let Real = R, Apparent = A. (R+A)/(R-A) = 2/1. R+A = 2R-2A => 3A = R => R/A = 3/1.", d: "<strong>Real Expansion:</strong> Actual expansion of liquid.<br><strong>Apparent Expansion:</strong> Expansion observed relative to container." },
            { q: "Latent heat refers to the energy absorbed or released by a substance during a change of state, but with no change in temperature. What does \"latent\" mean in this context?", o: ["Constant", "Visible", "Hidden", "Transparent"], a: 2, e: "The word 'latent' comes from Latin meaning 'hidden', because the heat added does not show up as a temperature rise.", d: "<strong>Latent:</strong> Existing but not yet developed or manifest; hidden." }
        ],
        unit12: [
            { q: "If a body performing simple harmonic motion completes its one vibration in 2 seconds, its frequency of vibration is:", o: ["2 Hz", "1 Hz", "0.5 Hz", "10 Hz"], a: 2, e: "Frequency (f) is the reciprocal of Time Period (T). f = 1/T = 1/2 = 0.5 Hz.", d: "<strong>Frequency (f):</strong> Number of vibrations per second.<br><strong>Time Period (T):</strong> Time for one complete vibration." },
            { q: "360 waves are passing through a point in a river in one hour, time period of the wave is:", o: ["0.1 s", "1 s", "10 s", "100 s"], a: 2, e: "Frequency = Waves / Time = 360 / 3600s = 0.1 Hz. Time Period T = 1/f = 1/0.1 = 10 s.", d: "<strong>Time Period:</strong> The time taken for one complete wave to pass a point." },
            { q: "Time period of electrical vibrator of ripple tank is 0.5 s, water waves in ripple tank has speed of 10 m/s and amplitude of 5 cm. Calculate the frequency of the waves.", o: ["50 Hz", "0.5 Hz", "200 Hz", "2 Hz"], a: 3, e: "Frequency depends only on the source. f = 1/T = 1/0.5 = 2 Hz.", d: "<strong>Ripple Tank:</strong> A device used to study the behavior of water waves." },
            { q: "Which of the followings is longitudinal wave?", o: ["X-rays", "Light", "String waves", "Sound"], a: 3, e: "Sound waves are longitudinal because particles vibrate parallel to the direction of wave propagation. Others are transverse.", d: "<strong>Longitudinal Wave:</strong> A wave in which the medium's vibration is parallel to the direction of the wave." },
            { q: "When water waves enter from deep water to shallow water:", o: ["Frequency of water waves increases", "Time period of water waves decreases", "Speed of water waves decreases", "Wavelength of water waves increases"], a: 2, e: "In shallow water, friction with the bottom slows the wave down. Since v = fλ and frequency (f) is constant, speed (v) decreases.", d: "<strong>Refraction of Waves:</strong> Change in speed and direction of waves when passing from one medium/depth to another." },
            { q: "Listening to radio transmission in deep valleys of mountain areas is due to:", o: ["Reflection of waves", "Refraction of waves", "Interference of waves", "Diffraction of waves"], a: 3, e: "Diffraction allows waves to bend around obstacles (like mountains) and spread into the 'shadow' regions.", d: "<strong>Diffraction:</strong> The bending of waves around the corners of an obstacle or through an aperture." },
            { q: "Which of the following are transverse waves:", o: ["X-rays", "Light", "String waves", "All of these"], a: 3, e: "All listed waves involve vibrations perpendicular to the direction of energy transfer, making them transverse.", d: "<strong>Transverse Wave:</strong> A wave vibrating at right angles to the direction of its propagation." },
            { q: "Tsunamis are most often generated by:", o: ["Flood", "Bomb blast", "Earth quake", "None of these"], a: 2, e: "Tsunamis are generated by the displacement of a large volume of water, usually attributed to an underwater earthquake.", d: "<strong>Tsunami:</strong> A long high sea wave caused by an earthquake, submarine landslide, or other disturbance." },
            { q: "Waves transfer:", o: ["energy", "frequency", "wavelength", "velocity"], a: 0, e: "Waves are a mechanism for transferring energy from one point to another without the permanent transfer of matter.", d: "<strong>Wave:</strong> A disturbance that travels through a medium, transporting energy." },
            { q: "Which of the following characteristics of a wave is independent of the others?", o: ["speed", "frequency", "amplitude", "wavelength"], a: 2, e: "Amplitude (loudness/intensity) is independent of speed, frequency, and wavelength. You can have a loud or soft sound at the same pitch.", d: "<strong>Amplitude:</strong> The maximum displacement of points on a wave from the equilibrium position." },
            { q: "The relation between v, f and λ of a wave is:", o: ["vf = λ", "fλ = v", "vλ = f", "v = λ / f"], a: 1, e: "The wave equation states that Speed (v) equals Frequency (f) times Wavelength (λ).", d: "<strong>Wave Equation:</strong> v = fλ." }
        ],
        unit13: [
            { q: "What are the three main parts of the human ear?", o: ["Outer ear, Middle ear, Inner ear", "Inner ear, Cochlea, Eardrum", "Middle ear, Eardrum, Auditory nerve", "Outer ear, Auditory nerve, Cochlea"], a: 0, e: "The ear is anatomically divided into the Outer Ear (pinna, canal), Middle Ear (ossicles), and Inner Ear (cochlea).", d: "<strong>Ear Anatomy:</strong> The biological structure for hearing." },
            { q: "Sound produced by piano and violin gives ______ waveform on oscilloscope.", o: ["Simple", "Harmonic", "Complex", "Symmetric"], a: 2, e: "Musical instruments produce a fundamental frequency mixed with overtones, creating a complex waveform, which gives them their unique quality (timbre).", d: "<strong>Quality (Timbre):</strong> The characteristic of sound that distinguishes instruments playing the same note." },
            { q: "Which is NOT true for sound?", o: ["Sound is produced by vibrating body", "Sound travels due to variation of pressure in air", "Sound transfer energy along with matter of medium", "Sound is compressional and longitudinal wave"], a: 2, e: "Sound transfers energy, but it does NOT transfer matter. The particles of the medium oscillate but do not travel with the wave.", d: "<strong>Sound Wave:</strong> A mechanical wave that propagates through a medium." },
            { q: "Sound travels faster in:", o: ["rubber", "air", "water", "steel"], a: 3, e: "Sound travels fastest in solids (like steel) because particles are packed tightly together, allowing vibration to pass quickly.", d: "<strong>Speed of Sound:</strong> Solids > Liquids > Gases." },
            { q: "Speed of sound in air is 332 ms⁻¹. What is its speed in vacuum?", o: ["Equal to 332 ms⁻¹", "Great than 332 ms⁻¹", "Less than 332 ms⁻¹", "Zero"], a: 3, e: "Sound is a mechanical wave and requires a medium to travel. It cannot travel through a vacuum.", d: "<strong>Vacuum:</strong> A space entirely devoid of matter." },
            { q: "The sound travels from water to an iron rod and then into air and back into water. The speed of sound will successively:", o: ["increase, decrease, increase", "decrease, increase, decrease", "increase, increase, increase", "decrease, decrease, decrease"], a: 0, e: "Water to Iron (Liquid to Solid -> Increase). Iron to Air (Solid to Gas -> Decrease). Air to Water (Gas to Liquid -> Increase).", d: "<strong>Medium Density:</strong> Affects the speed of sound transmission." },
            { q: "What will happen to speed of sound, if frequency is doubled? It will become:", o: ["half", "double", "four times", "remain same"], a: 3, e: "The speed of sound depends on the medium, not the frequency. If frequency doubles, wavelength halves, but speed remains constant.", d: "<strong>Speed of Sound:</strong> v = fλ (constant for a given medium)." },
            { q: "Infrasonic waves have frequency:", o: ["greater than 20Hz", "less than 20Hz", "of 20 Hz", "of 20 kHz"], a: 1, e: "Infrasonic waves are sound waves with frequencies below the lower limit of human audibility (20 Hz).", d: "<strong>Infrasonic:</strong> Sound frequency < 20 Hz." },
            { q: "For echo, the minimum distance of a person from obstacle is:", o: ["17 m", "34 m", "0.1 m", "any distance above 50 m"], a: 0, e: "To hear an echo, the time gap must be 0.1s. Distance = Speed × Time / 2 = 340 × 0.1 / 2 = 17 meters.", d: "<strong>Echo:</strong> A reflection of sound that arrives at the listener with a delay after the direct sound." },
            { q: "The property of waves which is directly related with loudness of sound is", o: ["Frequency", "Wavelength", "Speed", "Amplitude"], a: 3, e: "Loudness is determined by the amplitude of the sound wave. Larger amplitude means more energy and louder sound.", d: "<strong>Loudness:</strong> The subjective perception of sound pressure." },
            { q: "Sound entered in ear is amplified by:", o: ["Ossicles", "Cochlea", "Eardrum", "Brain"], a: 0, e: "The three small bones (ossicles) in the middle ear act as levers to amplify the vibrations from the eardrum before transmitting them to the inner ear.", d: "<strong>Ossicles:</strong> Malleus, Incus, and Stapes bones." },
            { q: "Silent whistle is used to train dog. When trainer blows the whistle, human beings do not hear it but dog do listen. Its possible frequency is:", o: ["> 20 Hz", "< 20 Hz", "< 20000 Hz", "> 20000 Hz"], a: 3, e: "Dogs can hear ultrasonic frequencies (above 20,000 Hz) which are inaudible to humans.", d: "<strong>Ultrasonic:</strong> Sound frequency > 20,000 Hz." },
            { q: "The pitch of sound depends upon:", o: ["frequency", "amplitude", "quality", "displacement"], a: 0, e: "Pitch is the characteristic of sound that depends on the frequency of vibration. Higher frequency means higher pitch.", d: "<strong>Pitch:</strong> How high or low a sound is perceived." },
            { q: "Two sound waves having same loudness and pitch can be distinguished by one of the characteristics of sound called:", o: ["Loudness", "pitch", "quality", "intensity"], a: 2, e: "Quality (or timbre) allows us to distinguish between different sources (like a piano vs guitar) producing the same note.", d: "<strong>Quality:</strong> The character or nature of a sound." },
            { q: "The sensation of sound persists in our brain for about", o: ["10 s", "1 s", "0.1 s", "0.01 s"], a: 2, e: "The human brain retains the sensation of sound for about 0.1 seconds. This is why an echo must return after 0.1s to be heard distinctly.", d: "<strong>Persistence of Hearing:</strong> The retention of sound perception in the brain." }
        ],
        unit14: [
            { q: "A glass slab is dipped in a transparent liquid having same refractive index as that of glass slab. We cannot see the boundary of the two media (glass and liquid) due to ______ refraction.", o: ["Maximum", "Minimum", "Zero", "Unit"], a: 2, e: "Refraction occurs due to a change in speed of light. If refractive indices are same, speed doesn't change, light doesn't bend, and no boundary is visible.", d: "<strong>Refraction:</strong> Bending of light when passing from one medium to another." },
            { q: "An incident ray makes an angle of 45° with a plane mirror. The angle of reflection is:", o: ["30°", "45°", "60°", "90°"], a: 1, e: "The angle of reflection is always equal to the angle of incidence. Here, the incident ray makes a 45° angle with the plane mirror, which means it also makes a 45° angle with the normal. So, the angle of reflection is 45°.", d: "<strong>Incident ray:</strong> The ray of light that falls on a surface.<br><strong>Normal:</strong> An imaginary line drawn perpendicular to the surface.<br><strong>Angle of incidence:</strong> Angle between incident ray and normal.<br><strong>Angle of reflection:</strong> Angle between reflected ray and normal." },
            { q: "Two plane mirrors are arranged parallel facing each other. The image(s) formed may be:", o: ["One", "Two", "Four", "Infinite"], a: 3, e: "Light reflects back and forth between the two parallel mirrors infinitely, creating an infinite number of images.", d: "<strong>Multiple Reflection:</strong> Formation of multiple images by mirrors placed at angles." },
            { q: "The apparent flattening of the Sun at the dawn and dusk is due to phenomenon of:", o: ["Refraction", "Reflection", "Dispersion", "Polarization"], a: 0, e: "Light from the sun bends (refracts) as it passes through the Earth's atmosphere, causing the sun to appear oval or flattened near the horizon.", d: "<strong>Atmospheric Refraction:</strong> Deviation of light from a straight line as it passes through the atmosphere." },
            { q: "On summer days you see the reflections on roads which is called mirage. It is due to:", o: ["Refraction", "Reflection", "Dispersion", "Total internal reflection"], a: 3, e: "Hot air near the road is less dense than cooler air above. Light bends until it exceeds the critical angle and totally reflects, creating a mirage.", d: "<strong>Total Internal Reflection:</strong> Complete reflection of a light ray reaching an interface with a less dense medium." },
            { q: "The colors in the rainbow are formed by:", o: ["Refraction", "Reflection", "Dispersion", "Total internal reflection"], a: 2, e: "Water droplets act like prisms, splitting white sunlight into its constituent colors (spectrum).", d: "<strong>Dispersion:</strong> The separation of white light into colors." },
            { q: "The lenses in your eyes produce image on retina:", o: ["Inverted and virtual", "Inverted and real", "Erect and virtual", "Erect and real"], a: 1, e: "The eye lens is a convex lens, which forms a real and inverted image on the retina. The brain interprets it as erect.", d: "<strong>Retina:</strong> The light-sensitive layer at the back of the eye." },
            { q: "What is the speed of light in diamond if its refractive index is 2.5?", o: ["1.2 x 10⁸ m/s", "2.5 x 10⁸ m/s", "2.1 x 10⁸ m/s", "5.2 x 10⁸ m/s"], a: 0, e: "v = c / n. v = (3 x 10⁸) / 2.5 = 1.2 x 10⁸ m/s.", d: "<strong>Refractive Index (n):</strong> Ratio of speed of light in vacuum to speed in medium." },
            { q: "In a convex mirror when the object is placed at 'c' the image formed will be:", o: ["Smaller", "Larger", "Same size", "Zero size"], a: 0, e: "A convex mirror always forms a virtual, erect, and diminished (smaller) image, regardless of the object's position.", d: "<strong>Convex Mirror:</strong> A diverging mirror." },
            { q: "The working principle of optical fibers is:", o: ["Refraction", "Diffraction", "Reflection", "Total internal reflection"], a: 3, e: "Light travels through the core of the optical fiber by continuously bouncing off the cladding due to Total Internal Reflection.", d: "<strong>Optical Fiber:</strong> A flexible, transparent fiber used to transmit light." },
            { q: "If an object is placed at 10 cm from the convex lens having focal length 5 cm. the linear magnification of convex lens is?", o: ["0.5", "1", "2", "5"], a: 1, e: "Object is at 2f (10cm = 2*5cm). Image forms at 2f. Magnification m = q/p = 10/10 = 1.", d: "<strong>Magnification:</strong> Ratio of image size to object size." },
            { q: "Non-luminous matter which can be studied with the help of gravitational lensing is called:", o: ["Visible Matter", "Red matter", "Dark matter", "White matter"], a: 2, e: "Dark matter does not emit light but bends light from background stars due to its gravity (Gravitational Lensing).", d: "<strong>Dark Matter:</strong> Hypothetical matter that accounts for most of the matter in the universe." },
            { q: "Image formed by plane mirror is always:", o: ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"], a: 3, e: "Plane mirrors form images that appear behind the mirror (virtual) and are upright (erect).", d: "<strong>Virtual Image:</strong> An image formed where light rays appear to diverge from." },
            { q: "Einstein rings are seen due to a phenomenon:", o: ["Converging lensing", "Diverging lensing", "Gravitational lensing", "Acoustic lensing"], a: 2, e: "When a massive object (like a galaxy) bends the light of a source behind it into a ring shape, it is called an Einstein Ring.", d: "<strong>Gravitational Lensing:</strong> The bending of light by gravity." },
            { q: "The ______ phenomenon is used in non-destructive testing of materials for voids and cracks in opaque materials?", o: ["Converging lensing", "Diverging lensing", "Gravitational lensing", "Acoustic lensing"], a: 3, e: "Acoustic lensing (using ultrasound) is used to focus sound waves to detect internal flaws in materials.", d: "<strong>Non-Destructive Testing (NDT):</strong> Testing materials without causing damage." },
            { q: "All waves exhibit the phenomenon of reflection but light waves are the only waves which exhibit the phenomenon of:", o: ["Refraction", "Diffraction", "Reflection", "Total internal reflection"], a: 3, e: "While sound can also reflect internally, Total Internal Reflection is a characteristic phenomenon prominently studied and utilized in optics (light).", d: "<strong>TIR:</strong> Reflection of light within a medium." },
            { q: "The white light passing through the prism, due to refraction shows a behavior of ______ light:", o: ["Interference", "Dispersion", "Reflection", "Diffraction"], a: 1, e: "Dispersion occurs because different colors of light refract by different amounts.", d: "<strong>Prism:</strong> A transparent optical element with flat, polished surfaces that refract light." },
            { q: "The visible light spectrum lies in the range of ______ nm of wavelength:", o: ["400-850", "500-700", "400-750", "700-900"], a: 2, e: "The human eye can detect wavelengths from approximately 400nm (Violet) to 750nm (Red).", d: "<strong>Visible Spectrum:</strong> The portion of the electromagnetic spectrum that is visible to the human eye." },
            { q: "The rods and cones a human eye has are:", o: ["6 million and 100 million", "100 million and 6 million", "6 million and 6 million", "100 million and 100 million"], a: 1, e: "The retina contains about 100 million rods (for low light) and 6 million cones (for color).", d: "<strong>Rods & Cones:</strong> Photoreceptor cells in the retina." }
        ],
        unit15: [
            { q: "A rubber rod is rubbed with fur. The fur is then quickly brought near the bulb of uncharged electroscope. The sign of the charge on the leaves of the electroscope is", o: ["positive", "negative", "neutral", "zero"], a: 0, e: "Rubbing rubber with fur makes rubber negative and fur positive. Bringing positive fur near the bulb induces negative charge on the bulb and repels positive charge to the leaves.", d: "<strong>Electrostatic Induction:</strong> Redistribution of charge in an object caused by the influence of nearby charges." },
            { q: "A negatively charged object is brought close to the surface of a conductor, whose opposite side is then grounded. What kind of charge is left on the conductor's surface?", o: ["positive", "negative", "neutral", "zero"], a: 0, e: "The negative object repels electrons to the far side. Grounding removes these electrons. The conductor is left with a net positive charge.", d: "<strong>Grounding:</strong> Connecting a conductor to the earth to remove excess charge." },
            { q: "A small metal ball hangs from the ceiling by an insulating thread. The ball is attracted to a positively charged rod held near the ball. The ball must be:", o: ["positive", "negative", "positive or neutral", "negative or neutral"], a: 1, e: "Attraction can occur if the ball is negative (opposite charges attract) OR if it is neutral (induction causes attraction). However, given the options, 'negative' is the primary force answer.", d: "<strong>Attraction:</strong> Force between opposite charges or charged and neutral objects." },
            { q: "A positive ion is formed when:", o: ["a neutral atom loses electron", "a neutral atom gains electron", "negatively charged atom loses electron", "can be true for all these cases"], a: 0, e: "Electrons are negatively charged. Losing an electron leaves the atom with a net positive charge.", d: "<strong>Cation:</strong> A positively charged ion." },
            { q: "A charged rod is brought near a suspended object, which is repelled by the rod. We can conclude that the suspended object is:", o: ["uncharged", "Charged with different sign", "Charged with same sign", "can be true for all these cases"], a: 2, e: "Repulsion is the sure test for charge. Only like charges repel. Attraction can happen with neutral objects.", d: "<strong>Repulsion:</strong> Force between like charges." },
            { q: "You have two lightweight metal spheres, each hanging from an insulating nylon thread. One of the spheres has a net negative charge, while the other sphere has no net charge. You now allow the two spheres to touch. Once they have touched, will the two spheres:", o: ["attract each other", "repel each other", "exert no force on each other", "neutralize each other"], a: 1, e: "On touching, charge is shared (conduction). Both spheres become negatively charged. Like charges then repel.", d: "<strong>Conduction:</strong> Transfer of charge by direct contact." },
            { q: "A negative point charge moves along a straight-line path directly toward a stationary positive point charge. Which aspect(s) of the electric force on the negative point charge will remain constant as it moves?", o: ["Magnitude", "direction", "both magnitude and direction", "neither magnitude nor direction"], a: 1, e: "The force is attractive, so direction is always towards the positive charge. Magnitude increases as distance decreases (Coulomb's Law).", d: "<strong>Coulomb's Law:</strong> Force is inversely proportional to the square of the distance." },
            { q: "To be safe during a lightning storm, it is best to be", o: ["in the middle of a grassy meadow.", "inside a metal car.", "next to a tall tree in a forest.", "on a metal observation tower."], a: 1, e: "The metal body of the car acts as a Faraday Cage, directing the lightning charge around the outside of the car to the ground, keeping the inside safe.", d: "<strong>Faraday Cage:</strong> A shield against external electric fields." },
            { q: "What causes the leaves of an electroscope to move apart when charged?", o: ["Attraction of unlike charges", "Repulsion of like charges", "Neutral nature of leaves", "Air Pressure"], a: 1, e: "Both leaves acquire the same type of charge (either both positive or both negative) and thus repel each other.", d: "<strong>Electroscope:</strong> An instrument for detecting the presence of electric charge." },
            { q: "Corona discharge is most likely to occur at which of the following locations on a conductor?", o: ["Flat surfaces", "Sharp points", "Smooth spheres", "Insulated areas"], a: 1, e: "Charge density is highest at sharp points, creating a strong electric field that ionizes the air.", d: "<strong>Corona Discharge:</strong> Electrical discharge brought on by the ionization of a fluid such as air surrounding a conductor." },
            { q: "What do Lichtenberg figures typically look like?", o: ["Straight lines", "Circular rings", "branching tree-like patterns", "Rectangular shapes"], a: 2, e: "Lichtenberg figures are branching electric discharges that appear on the surface or interior of insulating materials.", d: "<strong>Lichtenberg Figure:</strong> Branching tree-like patterns created by high voltage discharge." }
        ],
        unit16: [
            { q: "Ampere-hour (Ah) is the unit of:", o: ["electric current", "charge", "energy", "resistance"], a: 1, e: "Current (Ampere) × Time (Hour) = Charge. Q = I × t.", d: "<strong>Ampere-hour:</strong> A unit of electric charge." },
            { q: "Which of the following is a non-ohmic device?", o: ["Copper wire", "Carbon resistor", "Diode", "all of these"], a: 2, e: "A diode does not follow Ohm's law; its resistance changes with voltage (it is not linear).", d: "<strong>Non-ohmic:</strong> A device where current is not proportional to voltage." },
            { q: "Electric current is measured using:", o: ["ammeter", "voltmeter", "ohmmeter", "meter rod"], a: 0, e: "An Ammeter is connected in series to measure the flow of current.", d: "<strong>Ammeter:</strong> Instrument for measuring electric current in amperes." },
            { q: "Voltmeter measures", o: ["Potential difference", "electric current", "resistance", "resistivity"], a: 0, e: "A Voltmeter is connected in parallel to measure the potential difference (voltage) between two points.", d: "<strong>Voltmeter:</strong> Instrument for measuring electric potential in volts." },
            { q: "If 3 A of current flows for 2 minutes, the amount of charge crosses the cross-section of conductor will be:", o: ["3 C", "6 C", "60 C", "360 C"], a: 3, e: "Q = I × t. Time must be in seconds. Q = 3 A × (2 × 60) s = 3 × 120 = 360 C.", d: "<strong>Electric Charge (Q):</strong> Physical property of matter that causes it to experience a force in an electromagnetic field." },
            { q: "A current of 1 mA is passing through a wire. Number of electrons passing through a point in the wire in 10 seconds is:", o: ["6.25 x 10¹⁹", "6.25 x 10¹⁸", "6.25 x 10¹⁷", "6.25 x 10¹⁶"], a: 3, e: "Q = It = 1x10⁻³ × 10 = 0.01 C. Number of electrons n = Q/e = 0.01 / 1.6x10⁻¹⁹ = 6.25x10¹⁶.", d: "<strong>Quantization of Charge:</strong> Charge exists in discrete packets." },
            { q: "Resistance of a material always decreases when:", o: ["its temperature increases", "its temperature decreases", "Number of free electrons increases", "Number of free electrons decreases"], a: 2, e: "More free electrons mean better conductivity, which implies lower resistance.", d: "<strong>Resistance:</strong> Opposition to the flow of electric current." },
            { q: "The resistance of a metallic conductor varies inversely as:", o: ["area of cross section", "length", "temperature", "all of these"], a: 0, e: "R = ρL/A. Resistance is inversely proportional to Area (A). Thicker wires have less resistance.", d: "<strong>Resistivity Formula:</strong> R = ρL/A." },
            { q: "Directions of actual current and conventional current are:", o: ["same", "opposite to each other", "perpendicular to each other", "none of these"], a: 1, e: "Conventional current flows Positive to Negative. Actual electron flow is Negative to Positive.", d: "<strong>Conventional Current:</strong> Assumed flow of positive charge." },
            { q: "As temperature of a semiconductor increases, its resistance:", o: ["increases", "decreases", "remains constant", "becomes zero"], a: 1, e: "Semiconductors have a negative temperature coefficient. Heat generates more electron-hole pairs, increasing conductivity and decreasing resistance.", d: "<strong>Semiconductor:</strong> Material with conductivity between conductor and insulator." },
            { q: "The SI unit of temperature coefficient of resistance (α) is:", o: ["K", "K⁻¹", "ΩK", "Ω / K"], a: 1, e: "Alpha (α) represents fractional change per Kelvin. Unit is 1/K or K⁻¹.", d: "<strong>Temperature Coefficient (α):</strong> Change in resistance per degree change in temperature." },
            { q: "By increasing temperature, the resistivity of semiconductors:", o: ["increases", "decreases", "remains constant", "first increases then decreases"], a: 1, e: "Similar to resistance, the resistivity of semiconductors decreases as temperature rises due to increased carrier concentration.", d: "<strong>Resistivity:</strong> Intrinsic property of a material to resist current." }
        ],
        unit17: [
            { q: "Two resistances of 4 ohm are connected in parallel and this combination is connected to another 6 ohm resistance in series. The equivalent resistance will be:", o: ["4 Ω", "6 Ω", "8 Ω", "10 Ω"], a: 2, e: "Parallel: (4×4)/(4+4) = 2Ω. Series: 2Ω + 6Ω = 8Ω.", d: "<strong>Parallel/Series:</strong> Methods of connecting components." },
            { q: "In series connection of resistors, the current across each resistor:", o: ["increases", "decreases", "remain the same", "first increases then decreases"], a: 2, e: "In a series circuit, there is only one path for current to flow, so it remains constant throughout.", d: "<strong>Series Circuit:</strong> A circuit with a single path for current." },
            { q: "A resistor's first three colours are brown, black and red, its value is:", o: ["10 Ω", "10 kΩ", "200 Ω", "1000 Ω"], a: 3, e: "Brown(1), Black(0), Red(Multiplier 10²). Value = 10 × 100 = 1000 Ω = 1 kΩ.", d: "<strong>Resistor Color Code:</strong> System to mark resistor values." },
            { q: "The relation for electric power in a circuit is P =", o: ["IV", "I²R", "V²/R", "all of these"], a: 3, e: "All three are valid formulas derived from Ohm's Law (V=IR).", d: "<strong>Electric Power:</strong> Rate at which electrical energy is transferred." },
            { q: "When four cells, each with an emf of 0.5 V, are connected in parallel, the net emf is:", o: ["4.5 V", "2.0 V", "0.75 V", "0.5 V"], a: 3, e: "In parallel combination of identical cells, the net EMF is equal to the EMF of a single cell.", d: "<strong>EMF:</strong> Electromotive Force." },
            { q: "The purpose of grounding electrical systems is to:", o: ["provide a path for current to flow", "protect against electric shocks", "reduce electrical resistance", "increase energy efficiency"], a: 1, e: "Grounding provides a safe path for excess current to flow into the earth, preventing electric shocks.", d: "<strong>Earthing/Grounding:</strong> Connecting electrical devices to the ground for safety." },
            { q: "The purpose of a circuit breaker is to:", o: ["increase electrical resistance", "prevent electrical shock", "regulate voltage", "interrupt the flow of electricity in case of a fault"], a: 3, e: "A circuit breaker automatically switches off the circuit when current exceeds a safe limit (overload or short circuit).", d: "<strong>Circuit Breaker:</strong> An automatic electrical switch designed to protect a circuit." },
            { q: "Which electrical element control the flow of the electric current in a circuit?", o: ["conductor", "insulator", "Resistor", "capacitor"], a: 2, e: "Resistors are designed to provide specific resistance to limit or control the flow of current.", d: "<strong>Resistor:</strong> A passive two-terminal electrical component that implements electrical resistance." },
            { q: "A and B are two bulbs connected in parallel. A is glowing brighter than B, then the relation between Ra and Rb is:", o: ["Ra > Rb", "Ra < Rb", "Ra = Rb", "Ra = 0"], a: 1, e: "In parallel, Voltage (V) is same. Power P = V²/R. Higher Power (Brighter) means Lower Resistance. Since A is brighter, Ra < Rb.", d: "<strong>Power in Parallel:</strong> Inversely proportional to resistance." },
            { q: "The S.I unit for electrical power is:", o: ["watt", "Joule", "volt", "kWh"], a: 0, e: "The Watt (W) is the SI unit of power, defined as one joule per second.", d: "<strong>Watt:</strong> Unit of power." },
            { q: "A wire of resistance R is divided in 10 equal parts. These parts are connected in parallel, the equivalent resistance of such connection will be:", o: ["10 R", "R", "0.1 R", "0.01 R"], a: 3, e: "Each part has resistance r = R/10. 10 parts in parallel: Req = r/10 = (R/10)/10 = R/100 = 0.01 R.", d: "<strong>Parallel Resistance:</strong> Req decreases as more resistors are added." }
        ],
        unit18: [
            { q: "The approximate potential barrier for germanium and silicon transistors are respectively?", o: ["0.3 V and 0.7 V", "0.7 V and 0.3 V", "0.7 V and 0.5 V", "0.5 V and 0.7 V"], a: 0, e: "Germanium has a lower potential barrier (~0.3V) compared to Silicon (~0.7V).", d: "<strong>Potential Barrier:</strong> Voltage required to overcome the depletion region." },
            { q: "The current ratio of a beta is:", o: ["Ic / Ie", "Ib / Ic", "Ie / Ib", "Ic / Ib"], a: 3, e: "Beta (β) is the current gain in Common Emitter configuration, defined as Collector Current divided by Base Current.", d: "<strong>Current Gain (β):</strong> β = Ic / Ib." },
            { q: "Which of the following relation is correct for a transistor?", o: ["Ic = Ib + Ie", "Ib = Ic + Ie", "Ie = Ic + Ib", "Ie = Ic - Ib"], a: 2, e: "Emitter current is the sum of Base current and Collector current.", d: "<strong>Transistor Equation:</strong> Ie = Ic + Ib." },
            { q: "The heavily doped region of the transistor is:", o: ["Emitter", "Collector", "Base", "All of these"], a: 0, e: "The Emitter is heavily doped to supply a large number of majority charge carriers.", d: "<strong>Doping:</strong> Adding impurities to semiconductors to alter conductivity." },
            { q: "A transistor has ________ PN junctions.", o: ["1", "2", "3", "4"], a: 1, e: "A BJT transistor has two junctions: Emitter-Base junction and Collector-Base junction.", d: "<strong>PN Junction:</strong> Boundary between p-type and n-type semiconductor materials." },
            { q: "If IE = 1 mA and IC = 0.25 mA then the IB value will be:", o: ["0.75 mA", "0.95 mA", "0.65 mA", "0.85 mA"], a: 0, e: "Ib = Ie - Ic = 1 - 0.25 = 0.75 mA.", d: "<strong>Base Current:</strong> Usually very small compared to Emitter/Collector current." },
            { q: "If the gain β of a NPN transistor is 200 and its collector current is 4 mA. The value of base current will be:", o: ["20 μA", "25 μA", "30 μA", "35 μA"], a: 0, e: "β = Ic / Ib => Ib = Ic / β = 4mA / 200 = 0.02 mA = 20 μA.", d: "<strong>Beta (β):</strong> Amplification factor." },
            { q: "The majority charge carriers in the emitter of an NPN transistor are:", o: ["pentavalent atoms", "electrons", "trivalent atoms", "holes"], a: 1, e: "In NPN, the Emitter is N-type, so majority carriers are electrons.", d: "<strong>NPN Transistor:</strong> Negative-Positive-Negative structure." },
            { q: "The output of a NAND gate is 0 when:", o: ["A is '1' and B is '0'", "A is '0' and B is '1'", "both A and B are '0'", "both A and B are '1'"], a: 3, e: "NAND is NOT-AND. It gives 0 only when all inputs are 1.", d: "<strong>NAND Gate:</strong> Logic gate producing FALSE output only if all inputs are TRUE." },
            { q: "If X = A + B, then X is 0 when:", o: ["both A and B are '0'", "A or B is '0'", "A is '0' and B is '1'", "A is '1' and B is '0'"], a: 0, e: "A + B represents the OR operation. Output is 0 only if both inputs are 0.", d: "<strong>OR Gate:</strong> Logic gate producing TRUE if at least one input is TRUE." },
            { q: "The output of a NOR gate is '1' when:", o: ["both of its inputs are '0'", "both of its inputs are '1'", "any of its inputs is '0'", "any of its inputs is '1'"], a: 0, e: "NOR is NOT-OR. It gives 1 only when all inputs are 0.", d: "<strong>NOR Gate:</strong> Logic gate producing TRUE output only if all inputs are FALSE." }
        ],
        unit19: [
            { q: "The presence of a magnetic field can be detected by a:", o: ["small mass", "stationary positive charge", "stationary negative charge", "magnetic compass"], a: 3, e: "A magnetic compass needle aligns itself with magnetic field lines, making it a detector.", d: "<strong>Compass:</strong> A navigational instrument for determining direction." },
            { q: "A DC motor converts:", o: ["mechanical energy into electrical energy", "mechanical energy into chemical energy", "electrical energy into mechanical energy", "electrical energy into chemical energy"], a: 2, e: "A motor takes electricity and produces motion (mechanical energy).", d: "<strong>DC Motor:</strong> Device converting electrical energy to mechanical energy." },
            { q: "Which of the following device works on the principle of electromagnetic induction?", o: ["Magnetic compass", "Motor", "Transformer", "Oscilloscope"], a: 2, e: "Transformers use changing magnetic fields to induce voltage in a secondary coil.", d: "<strong>Electromagnetic Induction:</strong> Production of voltage across a conductor in a changing magnetic field." },
            { q: "Voltage in the secondary coil of transformer does not depend upon:", o: ["frequency of source", "primary voltage", "power losses", "turns ratio"], a: 0, e: "A transformer changes voltage and current, but the frequency remains the same from primary to secondary.", d: "<strong>Transformer:</strong> Static device that transfers electrical energy between circuits." },
            { q: "Which of the following quantities remain constant in an ideal step-up transformer?", o: ["current", "voltage", "power", "heat"], a: 2, e: "In an ideal transformer, Power Input = Power Output (Conservation of Energy).", d: "<strong>Ideal Transformer:</strong> A transformer with no energy losses." },
            { q: "Step-up transformer has a transformation ratio of 3:2. What is the voltage in secondary, if voltage in primary is 30 V?", o: ["15 V", "45 V", "90 V", "300 V"], a: 1, e: "Vs/Vp = Ratio. Vs/30 = 3/2. Vs = 30 * 1.5 = 45 V.", d: "<strong>Transformation Ratio:</strong> Ratio of secondary turns to primary turns." },
            { q: "The step-up transformer:", o: ["increases the input current", "increases the output voltage", "has more turns in the primary", "has less turns in the secondary coil"], a: 1, e: "Step-up means stepping up the voltage. (It decreases current).", d: "<strong>Step-up Transformer:</strong> Increases voltage." },
            { q: "A step up transformer is used before electricity is transmitted by overhead cables. Select the statement that explains why this is done.", o: ["It increases the voltage to increase the speed at which the electricity travels.", "It increases the voltage to reduce energy loss in the cables.", "It increases the current to increase the speed at which the electricity travels.", "It increases the current to reduce energy loss in the cables."], a: 1, e: "High voltage transmission reduces current (I). Since power loss is I²R, reducing current significantly reduces heat loss.", d: "<strong>Power Loss:</strong> Energy lost as heat in transmission lines." },
            { q: "Which of the following does not change in an ordinary transformer?", o: ["power", "Frequency", "Current", "Voltage"], a: 1, e: "Frequency of the AC signal remains unchanged during transformation.", d: "<strong>Frequency:</strong> Number of cycles per second." }
        ],
        unit20: [
            { q: "Identify the electromagnetic wave with the greatest ability to penetrate matter.", o: ["Radio waves", "Ultraviolet", "X-rays", "Gamma rays"], a: 3, e: "Gamma rays have the highest frequency and energy, allowing them to penetrate deep into matter.", d: "<strong>Gamma Rays:</strong> High-energy EM radiation." },
            { q: "Which type of radiation primarily carries heat energy?", o: ["Radio waves", "Ultraviolet", "Infrared", "Visible light"], a: 2, e: "Infrared radiation is perceived as heat.", d: "<strong>Infrared:</strong> EM radiation with wavelengths longer than visible light." },
            { q: "The wavelength of 10 cm is corresponding to spectrum of:", o: ["Microwaves", "Ultraviolet", "Infrared", "X-rays"], a: 0, e: "Microwaves typically range from 1 mm to 1 m.", d: "<strong>Microwaves:</strong> Used in cooking and communication." },
            { q: "The atomic structure of solids or cracks in solid structure can be investigated by:", o: ["Microwaves", "Ultraviolet", "Gamma rays", "X-rays"], a: 3, e: "X-rays have short wavelengths comparable to atomic spacing, making them useful for diffraction studies and imaging cracks.", d: "<strong>X-ray Diffraction:</strong> Technique to study crystal structure." },
            { q: "Which waves are used for treating muscle aches in physiotherapy?", o: ["Microwaves", "Ultraviolet", "Infrared", "X-rays"], a: 2, e: "Infrared lamps are used to provide deep heating to muscles.", d: "<strong>Physiotherapy:</strong> Treatment of disease/injury by physical methods." },
            { q: "X-rays have a higher energy than visible light, because of its:", o: ["Shorter wavelength", "Longer wavelength", "Lower frequency", "Higher speed"], a: 0, e: "Energy is inversely proportional to wavelength (E = hc/λ). Shorter wavelength means higher energy.", d: "<strong>Planck's Relation:</strong> E = hf." },
            { q: "Electromagnetic waves are produced due to the motion of which of the following?", o: ["Neutral particles", "Charged particles", "Accelerating neutral particles", "Accelerating charged particles"], a: 3, e: "Accelerating electric charges produce changing electric and magnetic fields, generating EM waves.", d: "<strong>EM Wave Generation:</strong> Requires acceleration of charge." },
            { q: "If the frequency of an electromagnetic wave is 2 × 10¹⁸ Hz, to which spectrum it belongs to?", o: ["Microwaves", "Ultraviolet", "Infrared", "X-rays"], a: 3, e: "Frequencies in the range of 10¹⁶ to 10¹⁹ Hz correspond to X-rays.", d: "<strong>EM Spectrum:</strong> Range of all types of EM radiation." },
            { q: "Light with longest wavelength in visible spectrum is:", o: ["Green", "Violet", "Orange", "Red"], a: 3, e: "Red light has the longest wavelength (~700nm) and Violet has the shortest (~400nm) in the visible range.", d: "<strong>Visible Light:</strong> EM radiation visible to the human eye." },
            { q: "Electromagnetic waves exhibit particle-like behavior in quantum mechanics. These particles are called:", o: ["Atom", "X-ray", "Electron", "Photon"], a: 3, e: "A photon is a quantum (packet) of electromagnetic energy.", d: "<strong>Photon:</strong> Elementary particle of light." },
            { q: "The energy of an electromagnetic wave depends directly on its:", o: ["Wavelength", "Amplitude", "Frequency", "Speed"], a: 2, e: "E = hf. Energy is directly proportional to Frequency.", d: "<strong>Energy of Photon:</strong> Proportional to frequency." },
            { q: "When an electromagnetic wave enters from one medium into the other which quantity does not change?", o: ["Wavelength", "Speed", "Frequency", "Energy"], a: 2, e: "Frequency depends on the source and does not change during refraction. Speed and wavelength change.", d: "<strong>Refraction:</strong> Bending of wave due to change in speed." },
            { q: "On halving the area of a totally reflecting surface, the radiation pressure will:", o: ["Remain the same", "Double", "Halve", "Quadruple"], a: 0, e: "Radiation pressure depends on the intensity of the incident wave, not the area of the surface it hits (assuming the beam covers the surface).", d: "<strong>Radiation Pressure:</strong> Pressure exerted upon any surface exposed to EM radiation." },
            { q: "Solar sails are preferred for deep-space missions because they require:", o: ["Electric energy", "Fuel", "Chemical energy", "No fuel"], a: 3, e: "Solar sails use the momentum of photons from the sun for propulsion, requiring no onboard fuel.", d: "<strong>Solar Sail:</strong> Propulsion method using radiation pressure." },
            { q: "Which of these electromagnetic waves has the least momentum?", o: ["Gamma rays", "Ultraviolet", "Infrared", "Radio waves"], a: 3, e: "Momentum p = h/λ. Radio waves have the longest wavelength, thus the least momentum.", d: "<strong>Momentum of Photon:</strong> p = E/c." }
        ],
        unit21: [
            { q: "Charge on α-particle is how many times of the charge on proton?", o: ["two times", "three times", "four times", "one time"], a: 0, e: "An alpha particle is a Helium nucleus with 2 protons. Charge = +2e.", d: "<strong>Alpha Particle:</strong> Helium nucleus (2 protons, 2 neutrons)." },
            { q: "Uranium with atomic number 92 has an isotope 239 U, the number of neutrons in it are:", o: ["92", "239", "147", "331"], a: 2, e: "Neutrons = Mass Number - Atomic Number = 239 - 92 = 147.", d: "<strong>Isotope:</strong> Atoms with same protons but different neutrons." },
            { q: "Which of the following is deflected at large angles by electric or magnetic field?", o: ["α-particles", "β-particles", "γ-rays", "neutrons"], a: 0, e: "Alpha particles are heavy and doubly charged, but in Rutherford's experiment, they are known for large angle scattering upon collision with nuclei.", d: "<strong>Rutherford Scattering:</strong> Elastic scattering of charged particles by nuclei." },
            { q: "Beta (β) particles are fast moving:", o: ["electrons", "photons", "hydrogen nuclei", "helium nuclei"], a: 0, e: "Beta particles are high-energy, high-speed electrons or positrons emitted by certain fission fragments.", d: "<strong>Beta Particle:</strong> High-energy electron emitted during radioactive decay." },
            { q: "Cancer treatment involves targeting tumors with radiation. Which type of radiation is most commonly used for its ability to penetrate deep tissues?", o: ["α-particles", "β-particles", "γ-rays", "protons"], a: 2, e: "Gamma rays are highly penetrating and can reach deep tumors.", d: "<strong>Radiotherapy:</strong> Use of ionizing radiation to treat cancer." },
            { q: "Which of the following decay modes is due to a transition between states of the same nucleus?", o: ["alpha decay", "beta decay", "gamma decay", "all of these"], a: 2, e: "Gamma decay involves the release of energy (photon) as the nucleus moves from an excited state to a lower energy state without changing proton/neutron count.", d: "<strong>Gamma Decay:</strong> Emission of gamma rays from an excited nucleus." },
            { q: "During β-decay, the nucleon number:", o: ["decreases by 4", "does not change", "decreases by 1", "increases by 1"], a: 1, e: "In beta decay, a neutron turns into a proton (or vice versa), so the total number of nucleons (protons + neutrons) remains the same.", d: "<strong>Nucleon Number:</strong> Mass number (A)." },
            { q: "A radioactive element with a half-life of two years, the sample remained after 6 years is", o: ["75 %", "50 %", "25 %", "12.5 %"], a: 3, e: "6 years = 3 half-lives. 100% -> 50% -> 25% -> 12.5%.", d: "<strong>Half-life:</strong> Time taken for radioactivity to fall to half its original value." },
            { q: "The half life of stable isotope is theoretically:", o: ["zero", "1 s", "11 day", "infinite"], a: 3, e: "Stable isotopes do not decay, so their half-life is infinite.", d: "<strong>Stable Isotope:</strong> An isotope that does not undergo radioactive decay." },
            { q: "The unit for absorbed radiation dose is:", o: ["Bequerrel (Bq)", "Curie (Ci)", "Gray (Gy)", "Sievert (Sv)"], a: 2, e: "The Gray (Gy) measures the energy deposited by radiation per unit mass of matter.", d: "<strong>Gray (Gy):</strong> SI unit of absorbed dose." },
            { q: "Which of the following is the largest contributor to natural background radiation exposure for most people?", o: ["Cosmic radiation", "Radon gas", "Food", "nuclear fallout"], a: 1, e: "Radon gas, released from the ground, accounts for the largest percentage of natural background radiation.", d: "<strong>Background Radiation:</strong> Ionizing radiation present in the environment." },
            { q: "Radiocarbon dating is a technique used to estimate the age of organic materials. What is the approximate maximum age limit for reliable dating using this method?", o: ["10,000 years", "50,000 years", "1 million years", "5 billion years"], a: 1, e: "Carbon-14 has a half-life of 5730 years. After about 50,000 years, the amount remaining is too small to measure accurately.", d: "<strong>Radiocarbon Dating:</strong> Method for determining the age of an object containing organic material." },
            { q: "Food irradiation eliminates bacteria to extend shelf life. Which isotope would be ideal for this purpose?", o: ["Strontium-90 (beta emitter, 28.8 years half-life)", "Cobalt-60 (gamma emitter, 5.27 years half-life)", "Iodine-131 (beta emitter, 8.02 days half-life)", "Plutonium-239 (alpha emitter, 24,100 years half-life)"], a: 1, e: "Cobalt-60 emits gamma rays which effectively penetrate food to kill bacteria without making the food radioactive.", d: "<strong>Irradiation:</strong> Exposure to radiation." },
            { q: "A worker is preparing to use a radioactive source for an experiment. Which of the following is the PRIMARY reason to maintain a safe distance from the source during use?", o: ["To conserve the radioactive material for future experiments.", "To minimize the risk of contamination from the source.", "To reduce the intensity of radiation reaching the worker.", "To prevent accidental activation of the source."], a: 2, e: "Radiation intensity decreases with the square of the distance (Inverse Square Law). Distance is the best protection.", d: "<strong>Inverse Square Law:</strong> Intensity is inversely proportional to the square of the distance." },
            { q: "The energy of the sun is released due to:", o: ["nuclear fission", "nuclear fusion", "reduction", "oxidation"], a: 1, e: "The sun generates energy by fusing hydrogen nuclei into helium nuclei.", d: "<strong>Nuclear Fusion:</strong> Reaction where two or more atomic nuclei are combined to form one or more different atomic nuclei." },
            { q: "The existence of dark matter is primarily inferred from its:", o: ["Light emitted from distant galaxies", "Gravitational influence on visible matter", "Chemical reactions with normal matter", "Abundance in meteorites"], a: 1, e: "Dark matter cannot be seen but its existence is inferred from gravitational effects on visible matter, like the rotation speeds of galaxies.", d: "<strong>Dark Matter:</strong> Invisible matter that exerts gravitational force." }
        ]
    },
    computer: {
        unit1: [
            { q: "What is the binary representation of the decimal number -43 using 8-bit two's complement notation?", o: ["10101011", "11010101", "11010101", "11101011"], a: 1, e: "To find -43: 1) Binary of 43 is 00101011. 2) Invert bits: 11010100. 3) Add 1: 11010101.", d: "<strong>Two's Complement:</strong> A mathematical operation on binary numbers to represent signed integers." },
            { q: "Which of the following binary numbers corresponds to the hexadecimal number 3FA7?", o: ["0011 1111 1010 0111", "1100 0011 1101 1000", "1011 1100 0011 0111", "0111 1011 1011 1100"], a: 0, e: "Convert each hex digit to 4-bit binary: 3(0011), F(1111), A(1010), 7(0111).", d: "<strong>Hexadecimal:</strong> A base-16 number system using digits 0-9 and A-F." },
            { q: "How does the ASCII code for the character 'Z' (90 in decimal) look in binary?", o: ["01011010", "01001110", "01011000", "01101001"], a: 0, e: "90 = 64 + 16 + 8 + 2. In binary: 01011010.", d: "<strong>ASCII:</strong> American Standard Code for Information Interchange." },
            { q: "In an 8-bit signed integer representation, what is the range of values that can be represented?", o: ["-127 to 128", "-128 to 127", "0 to 255", "-256 to 255"], a: 1, e: "For n bits, the signed range is -2^(n-1) to 2^(n-1) - 1. For 8 bits: -128 to 127.", d: "<strong>Signed Integer:</strong> A data type that can represent both positive and negative numbers." },
            { q: "How many different values can be represented with a 10-bit binary number?", o: ["256", "1024", "512", "2048"], a: 1, e: "2^10 = 1024 unique values.", d: "<strong>Bit Depth:</strong> The number of bits used to indicate the color of a single pixel or value." },
            { q: "Which of the following is NOT a task performed by an operating system?", o: ["Process Management", "Memory Management", "Email Management", "Device Management"], a: 2, e: "Email management is handled by application software (like Outlook or Gmail), not the OS kernel.", d: "<strong>Operating System:</strong> System software that manages computer hardware and software resources." },
            { q: "Which type of operating system allows multiple tasks to be performed at the same time?", o: ["Multiprogramming", "Batch Processing", "Real-time", "Single-tasking"], a: 0, e: "Multiprogramming keeps multiple programs in memory simultaneously, allowing the CPU to switch between them.", d: "<strong>Multiprogramming:</strong> The running of two or more programs or sequences of instructions simultaneously." },
            { q: "Which state of a process represents that it is ready for execution but waiting for CPU time?", o: ["Start State", "Running State", "Ready State", "Blocked State"], a: 2, e: "A process in the 'Ready' state is loaded in memory and waiting for the scheduler to assign it to the CPU.", d: "<strong>Process State:</strong> The current condition of a process (e.g., New, Ready, Running, Waiting)." },
            { q: "What is the main purpose of a process scheduler?", o: ["To manage file operations", "To manage CPU utilization", "To manage memory allocation", "To manage network resources"], a: 1, e: "The scheduler decides which process runs next to maximize CPU efficiency.", d: "<strong>Scheduler:</strong> System software that handles process execution order." },
            { q: "Which memory management approach involves dividing memory into fixed-sized blocks?", o: ["Paging", "Segmentation", "Virtual Memory", "Contiguous Allocation"], a: 0, e: "Paging divides physical memory into fixed-size blocks called frames and logical memory into pages.", d: "<strong>Paging:</strong> A memory management scheme that eliminates the need for contiguous allocation of physical memory." },
            { q: "What is the main purpose of interrupts in an operating system?", o: ["To speed up CPU processing", "To slow down CPU processing", "To handle immediate events", "To manage network connections"], a: 2, e: "Interrupts signal the processor to stop its current task and handle a high-priority event (like a keystroke or hardware error).", d: "<strong>Interrupt:</strong> A signal to the processor emitted by hardware or software indicating an event that needs immediate attention." },
            { q: "Which scheduling algorithm assigns CPU time in fixed time slices to each process in a cyclic order?", o: ["First-Come First-Served (FCFS)", "Shortest Job Next (SJN)", "Priority Scheduling", "Round Robin (RR)"], a: 3, e: "Round Robin assigns a fixed time unit (quantum) to each process in turn.", d: "<strong>Round Robin:</strong> A CPU scheduling algorithm where each process gets a small unit of CPU time." },
            { q: "Which memory management technique divides memory into fixed-sized blocks?", o: ["Segmentation", "Paging", "Fixed Partitioning", "Dynamic Partitioning"], a: 1, e: "Paging divides memory into fixed-size chunks (pages/frames), whereas segmentation divides it into variable-sized segments.", d: "<strong>Frame:</strong> A fixed-sized block of physical memory." },
            { q: "Which type of hosting involves installing and running software on servers located within an organization's physical premises?", o: ["Shared Hosting", "Dedicated Hosting", "On-Premises Hosting", "Cloud Hosting"], a: 2, e: "On-premises means the hardware is physically located at the organization's site.", d: "<strong>On-Premises:</strong> Software and hardware located within the physical confines of an enterprise." },
            { q: "Which component of programming software translates code written in a high-level programming language into machine code?", o: ["Text Editor", "Compiler", "Debugger", "IDE"], a: 1, e: "A compiler translates the entire source code into machine code (binary) before execution.", d: "<strong>Compiler:</strong> A computer program that translates computer code written in one programming language into another language." }
        ],
        unit2: [
            { q: "Identify the activity that is based on personal preferences rather than algorithmic logic.", o: ["Sorting numbers in a list", "Deciding what to eat for dinner", "Determining if a number is a prime number", "Calculating the square root of a number"], a: 1, e: "Deciding what to eat is subjective and depends on preference, whereas the others follow strict logical steps.", d: "<strong>Algorithmic Logic:</strong> A step-by-step method of solving a problem that yields a predictable result." },
            { q: "Counting Principle Problems could easily be understood by the use of", o: ["Graph representation", "Tree representation", "Clock representation", "Map representation"], a: 1, e: "Tree diagrams visually represent all possible outcomes of a sequence of events.", d: "<strong>Tree Diagram:</strong> A diagram used in strategic decision making, valuation, or probability analysis." },
            { q: "In how many ways can you choose 2 out of 5 different books to take on a trip? (Order does not matter)", o: ["10", "20", "15", "5"], a: 0, e: "This is a combination problem (5C2). 5! / (2! * (5-2)!) = 10.", d: "<strong>Combination:</strong> A selection of items from a collection, such that the order of selection does not matter." },
            { q: "A committee of 3 members is to be selected from a group of 8 people. How many different committees can be formed?", o: ["56", "84", "28", "120"], a: 0, e: "8C3 = (8 × 7 × 6) / (3 × 2 × 1) = 56.", d: "<strong>Committee:</strong> A group of people appointed for a specific function." },
            { q: "You have 5 different shirts and 4 different pants. How many different outfits can you make by choosing one shirt and one pair of pants?", o: ["9", "20", "15", "10"], a: 1, e: "Multiplication Principle: 5 shirts × 4 pants = 20 outfits.", d: "<strong>Multiplication Principle:</strong> If one event can occur in m ways and a second in n ways, together they occur in m×n ways." },
            { q: "In how many ways can you select 3 different fruits from a basket of 7 different fruits? (Order does not matter)", o: ["35", "21", "56", "84"], a: 0, e: "7C3 = (7 × 6 × 5) / (3 × 2 × 1) = 35.", d: "<strong>Selection:</strong> Choosing a subset of items from a larger set." },
            { q: "The Pigeonhole Principle states that if more items are placed into containers than the number of containers, then:", o: ["Some containers must be empty", "At least one container must hold more than one item", "All containers will be full", "Each item will be placed in a different container"], a: 1, e: "If you have n items and m containers, and n > m, at least one container must contain more than 1 item.", d: "<strong>Pigeonhole Principle:</strong> A counting principle that states that if n items are put into m containers, with n > m, then at least one container must contain more than one item." },
            { q: "In a set of 50 students, 30 have completed a math project, 25 have completed a science project, and 15 have completed both. How many students have completed at least one project?", o: ["35", "40", "45", "50"], a: 1, e: "Using Inclusion-Exclusion: (Math) + (Science) - (Both) = 30 + 25 - 15 = 40.", d: "<strong>Inclusion-Exclusion Principle:</strong> A counting technique to calculate the size of the union of sets." },
            { q: "Which property of an algorithm ensures that it produces at least one output after the calculations?", o: ["Input", "Output", "Definiteness", "Finiteness"], a: 1, e: "An algorithm must produce at least one result (output) to be useful.", d: "<strong>Algorithm Properties:</strong> Input, Output, Definiteness, Finiteness, Effectiveness." },
            { q: "Which property ensures that an algorithm will eventually end after a finite number of steps?", o: ["Input", "Finiteness", "Effectiveness", "Generality"], a: 1, e: "Finiteness guarantees that the algorithm will not run in an infinite loop.", d: "<strong>Finiteness:</strong> The quality of having limits or bounds." }
        ],
        unit3: [
            { q: "Which of the following is primarily associated with front-end development?", o: ["Server management", "Database design", "User interface and design", "Memory Management"], a: 2, e: "Front-end development focuses on what the user sees and interacts with (UI/UX).", d: "<strong>Front-end:</strong> Client-side development involving HTML, CSS, and JavaScript." },
            { q: "Which of the following HTML attributes is required in the <input> element for email?", o: ["type=\"url\"", "type=\"text\"", "type=\"email\"", "type=\"password\""], a: 2, e: "The type='email' attribute ensures the browser validates the input as an email address.", d: "<strong>HTML Attribute:</strong> A modifier of an HTML element type." },
            { q: "In JavaScript, which method would you use to add a new item to the end of a list?", o: ["push()", "add()", "leftshift()", "rightshift()"], a: 0, e: "The push() method adds one or more elements to the end of an array.", d: "<strong>Array Method:</strong> A built-in function that performs an action on an array." },
            { q: "In JavaScript, how do you access the third element in an array called myArray?", o: ["myArray[3]", "myArray[2]", "myArray[1]", "myArray[0]"], a: 1, e: "Arrays are zero-indexed. The 1st element is at index 0, 2nd at 1, and 3rd at 2.", d: "<strong>Zero-based Indexing:</strong> A way of numbering in which the initial element of a sequence is assigned the index 0." },
            { q: "To manually stop JavaScript code execution at a certain point, you can use:", o: ["console.log()", "stop", "break", "debugger"], a: 3, e: "The 'debugger' statement stops the execution of JavaScript, and calls (if available) the debugging function.", d: "<strong>Debugger:</strong> A tool used to test and debug other programs." },
            { q: "What is the primary purpose of unit tests?", o: ["To validate code syntax", "To test individual parts of the code for correctness", "To style the user interface", "To deploy code to production"], a: 1, e: "Unit tests verify that individual units (functions, components) of source code work as expected.", d: "<strong>Unit Testing:</strong> A software testing method where individual units of source code are tested." },
            { q: "Front end development is also called ________.", o: ["Label", "Client-side", "Server", "Database"], a: 1, e: "It runs on the client's machine (browser), hence 'Client-side'.", d: "<strong>Client-side:</strong> Operations performed by the client in a client-server relationship." },
            { q: "Table is an easy way to organize information in ________.", o: ["columns", "rows", "webpages", "list"], a: 1, e: "Tables organize data into rows and columns, but structurally they are built row by row.", d: "<strong>HTML Table:</strong> A structure for arranging data in rows and columns." },
            { q: "Table's header cell and content is referred in ________ tag.", o: ["<th>", "<td>", "<caption>", "<tr>"], a: 0, e: "<th> stands for Table Header.", d: "<strong>Tag:</strong> A code element that labels the content." },
            { q: "Link between the borders of neighboring table cell is determined by ________.", o: ["Link border", "border collapse", "border separate", "border"], a: 1, e: "The 'border-collapse' CSS property sets whether table borders should collapse into a single border or be separated.", d: "<strong>CSS:</strong> Cascading Style Sheets." },
            { q: "Distance between the cell's border and its content is called ________.", o: ["Cell", "Output", "Padding", "Style"], a: 2, e: "Padding is the space between the content and the border.", d: "<strong>Box Model:</strong> A box that wraps around every HTML element (Margin, Border, Padding, Content)." },
            { q: "An element style during animation is specified by ________.", o: ["@key frame", "@style frame", "@highlighted frame", "@anchor frame"], a: 0, e: "@keyframes specifies the animation code.", d: "<strong>Keyframes:</strong> A way to control the intermediate steps in a CSS animation sequence." },
            { q: "A single table cell is indicated by a ________ tag.", o: ["<tc>", "<tf>", "<td>", "<th>"], a: 2, e: "<td> stands for Table Data.", d: "<strong>Cell:</strong> The intersection of a row and a column." },
            { q: "Arrays and list can contain data types containing ________.", o: ["Alphabets", "Numbers", "Alphanumeric", "Checkboxes"], a: 2, e: "Arrays can hold mixed data types, including alphanumeric strings.", d: "<strong>Array:</strong> A data structure used to store a collection of elements." },
            { q: "ADT stands for ________.", o: ["Abstract Data type", "Abstract document type", "All Data type", "Any Data type"], a: 0, e: "ADT is a theoretical model for data types defined by their behavior.", d: "<strong>ADT:</strong> Abstract Data Type." }
        ],
        unit4: [
            { q: "Which of the following is the primary benefit of integrating Mathematics and Statistics with Computer Science in Data Science?", o: ["Improved data visualization", "Better forecasting", "Increased accuracy", "Better decision making"], a: 1, e: "Statistics allows for the creation of predictive models that can forecast future trends based on historical data.", d: "<strong>Forecasting:</strong> The process of making predictions of the future based on past and present data." },
            { q: "Which of the following best describes the relationship between Data Science and Artificial Intelligence?", o: ["Data Science is a subset of Artificial Intelligence", "Artificial Intelligence is a tool used in Data Science", "Data Science and Artificial Intelligence are unrelated", "Data Science enables Artificial Intelligence"], a: 1, e: "Data Science uses AI algorithms (like machine learning) to analyze data and extract insights.", d: "<strong>Data Science:</strong> An interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from data." },
            { q: "The Turing Test, proposed by Alan Turing in 1950, measures a machine's ability to exhibit intelligent behavior. Which of the following is the fundamental assumption underlies this test?", o: ["Humans are better", "Machines are equal", "Intelligence levels vary", "Machines copy humans"], a: 3, e: "The test assumes that if a machine can imitate human responses so well that a judge cannot tell the difference, it exhibits intelligence.", d: "<strong>Turing Test:</strong> A test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human." },
            { q: "Which of the following should be considered critically while developing AI powered chatbots and virtual assistants?", o: ["User experience", "Data security", "Contextual awareness", "Emotional intelligence"], a: 1, e: "Chatbots handle personal user data, making data security and privacy a critical concern.", d: "<strong>Data Privacy:</strong> The protection of personal data from those who should not have access to it." },
            { q: "What ethical consideration arises from the integration of Artificial Intelligence (AI) into daily life devices?", o: ["Job displacement due to automation", "Increased energy consumption", "Improved customer service", "Enhanced data security"], a: 0, e: "As AI automates tasks, there is a concern that it will replace human jobs.", d: "<strong>Automation:</strong> The use of largely automatic equipment in a system of manufacturing or other production process." },
            { q: "Which of the following fields of Artificial Intelligence (AI) enables smartphones to recognize faces and unlock devices?", o: ["NLP", "Computer vision", "Deep learning", "Neural networks"], a: 1, e: "Computer Vision allows computers to 'see' and interpret visual information from the real world.", d: "<strong>Computer Vision:</strong> A field of AI that enables computers to derive meaningful information from digital images, videos and other visual inputs." },
            { q: "A company wants to develop a system that categorizes customer feedback into positive, negative, or neutral. Which learning model would be most suitable?", o: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Deep learning"], a: 0, e: "Supervised learning uses labeled data (e.g., feedback labeled as 'positive') to train the model.", d: "<strong>Supervised Learning:</strong> The machine learning task of learning a function that maps an input to an output based on example input-output pairs." },
            { q: "In a Reinforcement Learning model, what is the primary function of rewards and penalties provided as feedback to the agent?", o: ["Labeling data", "Evaluating performance", "Improving action choices", "Classifying outcomes"], a: 2, e: "The agent learns to make better decisions by trying to maximize the cumulative reward.", d: "<strong>Reinforcement Learning:</strong> An area of machine learning concerned with how intelligent agents ought to take actions in an environment in order to maximize the notion of cumulative reward." },
            { q: "Which stage of the data science life cycle ensures the model's accuracy, reliability, and compliance with privacy rules?", o: ["Model Deployment", "Model Evaluation", "Data Analysis", "Maintenance and Monitoring"], a: 1, e: "Evaluation involves testing the model against metrics to ensure it performs correctly before deployment.", d: "<strong>Evaluation Metrics:</strong> Measures used to assess the performance of a statistical or machine learning model." },
            { q: "Which of the following is the key characteristic of the \"Data Cleaning\" stage in the data science life cycle?", o: ["Data collection", "Error removal and data organization", "Pattern identification", "Model deployment"], a: 1, e: "Data cleaning involves fixing or removing incorrect, corrupted, incorrectly formatted, duplicate, or incomplete data.", d: "<strong>Data Cleaning:</strong> The process of detecting and correcting (or removing) corrupt or inaccurate records from a record set, table, or database." }
        ],
        unit5: [
            { q: "The technology used for management of supply chain is known as:", o: ["IoT", "Blockchain", "Cloud Computing", "AI Assistant"], a: 1, e: "Blockchain provides a transparent and immutable ledger, making it ideal for tracking goods in a supply chain.", d: "<strong>Blockchain:</strong> A system in which a record of transactions made in bitcoin or another cryptocurrency is maintained across several computers that are linked in a peer-to-peer network." },
            { q: "The technology that provides automation in manufacturing industry, healthcare, home, traffic monitoring, etc. is known as:", o: ["IoT", "Blockchain", "Cloud Computing", "Robotics"], a: 0, e: "IoT connects physical devices to the internet, allowing for automation and data exchange across various industries.", d: "<strong>IoT:</strong> Internet of Things." },
            { q: "The technology that is an alternative to on-premises computing in business is:", o: ["AI Computing", "Server Computing", "Cloud Computing", "Network Computing"], a: 2, e: "Cloud computing allows businesses to use remote servers instead of maintaining their own physical hardware.", d: "<strong>Cloud Computing:</strong> The on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user." },
            { q: "Branch of AI that gives computer the ability to understand text and spoken words like humans is known as:", o: ["Language Translation", "Digital Language Processing", "Robotics", "Natural Language Processing"], a: 3, e: "NLP focuses on the interaction between computers and human language.", d: "<strong>NLP:</strong> Natural Language Processing." },
            { q: "The technology that enabled the existence of Cryptocurrency is:", o: ["Cloud Computing", "Blockchain", "Robotics", "IoT"], a: 1, e: "Blockchain is the underlying technology that secures and verifies cryptocurrency transactions.", d: "<strong>Cryptocurrency:</strong> A digital currency in which transactions are verified and records maintained by a decentralized system using cryptography." },
            { q: "The virtual assistant developed by Microsoft is:", o: ["Cortana", "Siri", "Alexa", "Bixby"], a: 0, e: "Cortana is Microsoft's virtual assistant. Siri is Apple's, Alexa is Amazon's, and Bixby is Samsung's.", d: "<strong>Virtual Assistant:</strong> An application program that understands natural language voice commands and completes tasks for the user." },
            { q: "The probable next words or phrases that are displayed as we type anything in the search bar called:", o: ["Document Analysis", "Sentiment Analysis", "Predictive Text", "Internet Suggestion"], a: 2, e: "Predictive text uses algorithms to suggest the most likely next word based on context.", d: "<strong>Predictive Text:</strong> An input technology used where one key or button represents many letters, such as on the numeric keypads of mobile phones and in accessibility technologies." },
            { q: "AI based realistic videos that are not genuine are known as:", o: ["Privacy Breach Videos", "Social Manipulation Videos", "Misinformation Videos", "Deepfake Videos"], a: 3, e: "Deepfakes use deep learning to replace a person's likeness in a video with someone else's.", d: "<strong>Deepfake:</strong> Synthetic media in which a person in an existing image or video is replaced with someone else's likeness." }
        ],
        unit6: [
            { q: "[...] is a key reason for being careful and responsible online?", o: ["To save money", "To avoid technology addiction and protect personal information", "To become more popular", "To learn new skills"], a: 1, e: "Responsible use ensures safety from cyber threats and maintains mental health.", d: "<strong>Digital Wellbeing:</strong> The state of being healthy and happy in the digital age." },
            { q: "Spending too much time online be harmful for?", o: ["Mental health and productivity", "Physical fitness and diet", "Shopping habits", "Travel plans"], a: 1, e: "Excessive screen time is linked to anxiety, depression, and reduced productivity.", d: "<strong>Screen Time:</strong> The amount of time spent using a device with a screen such as a smartphone, computer, television, or video game console." },
            { q: "Which of the following is NOT a way to protect personal information online?", o: ["Using strong passwords", "Being alert for scams", "Sharing your passwords with friends", "Keeping privacy settings updated"], a: 2, e: "Sharing passwords compromises account security.", d: "<strong>Cyber Hygiene:</strong> The practices and steps that users of computers and other devices take to maintain system health and improve online security." },
            { q: "Technology addiction is well described by", o: ["Using technology occasionally", "Excessive use of digital devices", "Avoiding all forms of technology", "Only using technology for work purposes"], a: 1, e: "Addiction involves compulsive use despite negative consequences.", d: "<strong>Addiction:</strong> A complex condition, a brain disease that is manifested by compulsive substance use despite harmful consequence." },
            { q: "What is a common result of excessive screen time?", o: ["Enhanced social skills", "Social isolation and loneliness", "Improved academic performance", "Increased physical activity"], a: 1, e: "Spending time on screens often replaces face-to-face social interactions.", d: "<strong>Social Isolation:</strong> A state of complete or near-complete lack of contact between an individual and society." },
            { q: "Which of the following is a way to reduce technology addiction?", o: ["Increasing online gaming hours", "Practicing mindful use of technology", "Ignoring signs of addiction", "Sharing personal information online"], a: 1, e: "Mindful use involves being aware of how and why you use technology.", d: "<strong>Mindfulness:</strong> A mental state achieved by focusing one's awareness on the present moment." },
            { q: "Select one benefit of using the internet for good purposes?", o: ["Increasing online fraud", "Access to educational resources", "Spreading misinformation", "Cyberbullying"], a: 1, e: "The internet provides vast access to knowledge and learning materials.", d: "<strong>E-learning:</strong> Learning conducted via electronic media, typically on the Internet." },
            { q: "________ of the following is a positive use of the internet?", o: ["Cybercrime", "Online harassment", "Supporting social meeting", "Distributing illegal content"], a: 2, e: "The internet allows people to connect and form communities.", d: "<strong>Social Media:</strong> Websites and applications that enable users to create and share content or to participate in social networking." },
            { q: "________ is a way to protect your device from online threats?", o: ["Avoid using antivirus software", "Ignore software updates", "Use biometric authentication", "Share passwords freely"], a: 2, e: "Biometrics provide a secure way to verify identity.", d: "<strong>Biometrics:</strong> Body measurements and calculations related to human characteristics." },
            { q: "Which method is a hardware method to protect devices?", o: ["Biometric authentication", "Secure boot", "Firewalls", "All"], a: 0, e: "Biometric scanners (fingerprint, face ID) are physical hardware components.", d: "<strong>Hardware Security:</strong> Vulnerability protection that comes in the form of a physical device rather than software that is installed on the hardware of a computer system." },
            { q: "What is a public cloud?", o: ["A cloud environment used by one organization", "A cloud service offered to the general public by a third-party provider", "A private network for personal use", "A secure boot process for devices"], a: 1, e: "Public clouds share resources among multiple organizations.", d: "<strong>Public Cloud:</strong> Cloud computing services offered by third-party providers over the public Internet, making them available to anyone who wants to use or purchase them." },
            { q: "________ is the primary goal of cybersecurity?", o: ["To increase internet speed", "To protect computer systems and networks", "To develop new software applications", "To create more social media platforms"], a: 1, e: "Cybersecurity aims to defend against attacks and unauthorized access.", d: "<strong>Cybersecurity:</strong> The practice of protecting systems, networks, and programs from digital attacks." },
            { q: "Which of the following is an example of a legal online activity?", o: ["Hacking into a network to steal information", "Tricking people through phishing scams", "Developing a new mobile app", "Deploying malware to disrupt systems"], a: 2, e: "App development is a legitimate and productive activity.", d: "<strong>Software Development:</strong> The process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components." },
            { q: "Why is cybersecurity essential in the digital era?", o: ["It helps in faster data transmission", "It reduces the need for technical support", "It decreases the cost of internet services", "It ensures that personal data is protected from malicious actors"], a: 3, e: "With more data online, protection from theft is crucial.", d: "<strong>Data Protection:</strong> The process of safeguarding important information from corruption, compromise or loss." },
            { q: "Role of students which can minimizing the digital divide?", o: ["Developing new gaming applications", "Providing technology training and support to those who need it", "Reducing the prices of digital devices", "Creating more social media accounts"], a: 1, e: "Students can help bridge the gap by teaching others digital skills.", d: "<strong>Digital Divide:</strong> The gap between demographics and regions that have access to modern information and communications technology, and those that don't or have restricted access." }
        ],
        unit7: [
            { q: "Which term is used for the ability to effectively use digital technologies to access information, evaluate it and convert it into meaningful and appealing format?", o: ["Literacy", "Digital Literacy", "Social Media", "Information"], a: 1, e: "Digital literacy encompasses the skills to live, learn, and work in a society where communication and access to information is increasingly through digital technologies.", d: "<strong>Digital Literacy:</strong> The ability to find, evaluate, and compose clear information through writing and other media on various digital platforms." },
            { q: "What is the best way to collect information about a topic you are interested in?", o: ["Ask your friend", "Read a random book", "Search online and ask experts", "Guess the information"], a: 2, e: "Searching online and consulting experts provides the most accurate and up-to-date information.", d: "<strong>Information Retrieval:</strong> The process of obtaining information system resources that are relevant to an information need from a collection of those resources." },
            { q: "What is the benefit of using Google forms for information collection?", o: ["Collect small amount of data", "Quickly analyze and summarize data", "Get historical data", "Visualize data"], a: 1, e: "Google Forms automatically aggregates responses and provides summaries and charts.", d: "<strong>Data Collection:</strong> The process of gathering and measuring information on targeted variables in an established system." },
            { q: "What is the most important step to convert information into graphics?", o: ["Decide the purpose of graphics tool", "Select the right tool", "Check the local laws", "Decide the number of design elements"], a: 0, e: "Knowing the purpose ensures the graphic effectively communicates the intended message.", d: "<strong>Infographic:</strong> A graphic visual representation of information, data, or knowledge intended to present information quickly and clearly." },
            { q: "Which of the following is the primary purpose of billboard design?", o: ["Showcase company's identity", "Entertain the audience", "Grab attention of the audience", "Provide details of the company"], a: 2, e: "Billboards are viewed for a few seconds, so they must grab attention instantly.", d: "<strong>Visual Communication:</strong> The use of visual elements to convey ideas and information." },
            { q: "What is the primary benefit of using podcast as a learning tool?", o: ["To provide brief overview of a topic", "To present information in interactive way", "To provide platform for international news", "To facilitate language learning"], a: 3, e: "Podcasts are excellent for auditory learning, especially for languages.", d: "<strong>Podcast:</strong> A digital audio file made available on the Internet for downloading to a computer or mobile device." },
            { q: "What is the role of a podcast host?", o: ["To present their own opinion", "To facilitate discussion and guide the conversation", "To criticize the guest speaker", "To praise the guest speaker"], a: 1, e: "The host steers the conversation to ensure it remains engaging and on-topic.", d: "<strong>Moderator:</strong> Someone who presides over a meeting or discussion." },
            { q: "Which is the most common usage of social media besides audio and video calls?", o: ["Education", "Sharing necessary updates", "Translation", "Web Surfing"], a: 1, e: "Social media is widely used to share status updates, news, and life events.", d: "<strong>Status Update:</strong> A feature that allows users to discuss their thoughts, whereabouts, or important information with their friends." },
            { q: "Which social media platform is mostly used for educational tutorials, skill teachings and entertainment video content?", o: ["YouTube", "Facebook", "Instagram", "Podcast"], a: 0, e: "YouTube is the leading platform for long-form video content.", d: "<strong>Video Sharing:</strong> Hosting services for videos." },
            { q: "Which social media platform is mostly used for news, discussions and opinions?", o: ["Facebook", "YouTube", "X (Twitter)", "Instagram"], a: 2, e: "X (Twitter) is known for real-time news and public discourse.", d: "<strong>Microblogging:</strong> An online broadcast medium that exists as a specific form of blogging." }
        ],
        unit8: [
            { q: "What is the primary goal of quantitative research?", o: ["To understand concepts and experiences", "To test or confirm theories and assumptions", "To explore cultural and behavioral patterns", "To gather in-depth insights on subjective topics"], a: 1, e: "Quantitative research uses numerical data to quantify variables and generalize results.", d: "<strong>Quantitative Research:</strong> Systematic empirical investigation of observable phenomena via statistical, mathematical, or computational techniques." },
            { q: "Which of the following is a common method in qualitative research?", o: ["Statistical analysis", "Surveys with closed-ended questions", "Thematic analysis", "Experiments"], a: 2, e: "Thematic analysis identifies patterns (themes) within qualitative data like interview transcripts.", d: "<strong>Qualitative Research:</strong> Exploratory research used to gain an understanding of underlying reasons, opinions, and motivations." },
            { q: "In quantitative research, what type of data is typically used for statistical analysis?", o: ["Textual descriptions", "Words and meanings", "Numerical values", "Visual images"], a: 2, e: "Statistics requires numerical data for calculation.", d: "<strong>Statistics:</strong> The discipline that concerns the collection, organization, analysis, interpretation, and presentation of data." },
            { q: "Which method would you use if you want to understand how people feel about a new product?", o: ["A survey with Likert scale questions", "A series of in-depth interviews", "An experimental study", "Observational data analysis"], a: 1, e: "In-depth interviews provide qualitative insights into feelings and motivations.", d: "<strong>Interview:</strong> A conversation where questions are asked and answers are given." },
            { q: "Which type of question is best suited for collecting detailed feedback and open-ended responses?", o: ["Closed-ended question", "Likert scale question", "Open-ended question", "Binary question"], a: 2, e: "Open-ended questions allow respondents to answer in their own words.", d: "<strong>Open-ended Question:</strong> A question that cannot be answered with a simple 'yes' or 'no', or with a specific piece of information." },
            { q: "What is a common problem with self-administered questionnaires?", o: ["High cost", "High response rates", "Nonresponse bias", "Experimenter bias"], a: 2, e: "People often fail to return questionnaires, leading to nonresponse bias.", d: "<strong>Bias:</strong> Disproportionate weight in favor of or against an idea or thing, usually in a way that is closed-minded, prejudicial, or unfair." },
            { q: "Which method is typically used to ensure that the results of a questionnaire are not influenced by how questions are framed?", o: ["Using leading questions", "Using double negatives", "Balanced framing", "Avoiding jargon"], a: 2, e: "Balanced framing presents questions neutrally to avoid leading the respondent.", d: "<strong>Framing Effect:</strong> A cognitive bias where people decide on options based on whether the options are presented with positive or negative connotations." },
            { q: "Which step in market validation involves estimating the potential market size and share for your product?", o: ["Conducting customer validation interviews", "Writing down goals, assumptions, and hypotheses", "Testing your product or service", "Assessing market size and share"], a: 3, e: "This step quantifies the opportunity (TAM, SAM, SOM).", d: "<strong>Market Validation:</strong> The process of determining whether your product is of interest to a given target market." },
            { q: "What type of data is useful for researching the search volume of related terms?", o: ["Qualitative feedback from interviews", "Secondary data from market reports", "Monthly search volume data from search engines", "Customer demographic data"], a: 2, e: "Search volume data indicates interest and demand for specific topics.", d: "<strong>Keyword Research:</strong> A practice search engine optimization professionals use to find and research search terms." },
            { q: "What information is typically included in a customer profile?", o: ["Financial statements of the business", "Demographics, behaviors, and pain points of customers", "Market trends and competitive analysis", "Internal company processes"], a: 1, e: "A customer profile (persona) describes the ideal customer.", d: "<strong>Customer Persona:</strong> A semi-fictional representation of your ideal customer based on market research and real data about your existing customers." },
            { q: "What is one benefit of creating customer profiles?", o: ["Reduces the need for market research", "Decreases customer acquisition costs", "Eliminates the need for customer service", "Increases product complexity"], a: 1, e: "Targeting the right audience reduces wasted marketing spend.", d: "<strong>CAC:</strong> Customer Acquisition Cost." },
            { q: "What is the primary purpose of a business pitch?", o: ["To provide a comprehensive analysis of the business strategy", "To persuade investors or stakeholders of the business's potential and value", "To detail the day-to-day operations of the business", "To outline the long-term financial projections and market analysis"], a: 1, e: "A pitch is designed to sell the idea and get buy-in.", d: "<strong>Pitch:</strong> A presentation of a business idea to potential investors." },
            { q: "Which component of a business pitch addresses how your business will make money?", o: ["Problem Statement", "Solution", "Business Model", "Market Opportunity"], a: 2, e: "The business model explains revenue streams and cost structures.", d: "<strong>Business Model:</strong> A plan for the successful operation of a business, identifying sources of revenue, the intended customer base, products, and details of financing." },
            { q: "In an elevator pitch, what is the primary purpose of the \"hook\"?", o: ["To introduce the team members", "To provide detailed financial projections", "To grab the audience's attention and spark interest", "To explain the competitive analysis"], a: 2, e: "The hook must immediately engage the listener.", d: "<strong>Elevator Pitch:</strong> A short description of an idea, product or company that explains the concept in a way such that any listener can understand it in a short period of time." },
            { q: "What is the main difference between a business plan and a pitch document?", o: ["A business plan is more concise and visually appealing than a pitch document.", "A pitch document includes detailed market research and financial projections.", "A business plan is used for internal planning and detailed investor reviews, while a pitch document is designed for a quick, compelling introduction.", "A business plan is shorter and less detailed than a pitch document."], a: 2, e: "A plan is a detailed document; a pitch is a summary for presentation.", d: "<strong>Business Plan:</strong> A formal written document containing business goals, the methods on how these goals can be attained, and the time frame within which these goals need to be achieved." },
            { q: "Which of the following is NOT a key component of a successful elevator pitch?", o: ["Unique Selling Proposition", "Detailed Financial Projections", "Brief Introduction", "Call to Action"], a: 1, e: "There is no time for detailed financials in a short elevator pitch.", d: "<strong>USP:</strong> Unique Selling Proposition." },
            { q: "What should be the focus of a pitch document?", o: ["Long-term operational plans", "Detailed market research", "High-impact information and key points to spark interest", "Extensive financial data and projections"], a: 2, e: "It should highlight the most compelling aspects to generate interest.", d: "<strong>Pitch Deck:</strong> A brief presentation, often created using PowerPoint, Keynote or Prezi, used to provide your audience with a quick overview of your business plan." },
            { q: "Which of the following best describes the term \"Market Opportunity\" in a business pitch?", o: ["The financial model of the business", "The potential market size and growth prospects for the business", "The competitors in the industry", "The unique features of the business's product or service"], a: 1, e: "It defines the size and potential of the target market.", d: "<strong>Market Analysis:</strong> A quantitative and qualitative assessment of a market." },
            { q: "What role does \"Active Listening\" play in pitching a business idea?", o: ["It helps to provide detailed financial data.", "It allows for better adaptation based on audience feedback.", "It focuses on presenting a detailed operational plan.", "It ensures that the pitch remains under 10 minutes."], a: 1, e: "Listening to questions and reactions allows the presenter to tailor their pitch.", d: "<strong>Active Listening:</strong> A communication technique that is used in counseling, training, and conflict resolution." },
            { q: "Which of the following is an example of a call to action in an elevator pitch?", o: ["\"Our team has extensive experience in finance.\"", "\"We project a revenue of $500,000 in the first year.\"", "\"Can we schedule a meeting to discuss potential investment opportunities?\"", "\"Our solution is unique compared to others.\""], a: 2, e: "A call to action asks for a specific next step.", d: "<strong>CTA:</strong> Call To Action." }
        ]
    },
    chemistry: {
        unit1: [
            { q: "What is the principle of conservation of mass?", o: ["Mass is created during a chemical reaction", "Mass is destroyed during a chemical reaction", "Mass remains constant during a chemical reaction", "Mass can be converted into energy"], a: 2, e: "The law of conservation of mass states that mass is neither created nor destroyed in a chemical reaction.", d: "<strong>Conservation of Mass:</strong> Mass of reactants = Mass of products." },
            { q: "What does the peer review process ensure in scientific research?", o: ["Faster publication", "Accuracy and validity of findings", "Higher funding", "Reduced experimentation"], a: 1, e: "Peer review involves scrutiny by other experts in the field to ensure quality and credibility.", d: "<strong>Peer Review:</strong> Evaluation of work by one or more people with similar competencies." },
            { q: "Which of the following was an 18th-century chemical paradigm?", o: ["Atomic theory", "Phlogiston theory", "Quantum mechanics", "Periodic table"], a: 1, e: "The phlogiston theory postulated that a fire-like element called phlogiston is contained within combustible bodies.", d: "<strong>Phlogiston Theory:</strong> An obsolete scientific theory regarding combustion and rusting." },
            { q: "What does the periodic table of elements organize?", o: ["Elements by alphabetical order", "Elements by their properties and atomic number", "Elements by colour", "Elements by discovery date"], a: 1, e: "Elements are arranged by increasing atomic number and recurring chemical properties.", d: "<strong>Periodic Table:</strong> A tabular display of the chemical elements." },
            { q: "What does a 95% confidence level mean in scientific reporting?", o: ["Results are 95% accurate", "There is a 5% chance the results are incorrect", "95% of scientists agree", "The experiment is repeated 95 times"], a: 0, e: "It means there is a 95% probability that the true value lies within the confidence interval.", d: "<strong>Confidence Level:</strong> The probability that the value of a parameter falls within a specified range of values." },
            { q: "Which model of the atom includes a central nucleus?", o: ["Plum-pudding model", "Rutherford model", "Bohr model", "Quantum mechanical model"], a: 1, e: "Rutherford's gold foil experiment led to the discovery of the dense, positively charged nucleus.", d: "<strong>Rutherford Model:</strong> A model of the atom with a central nucleus and orbiting electrons." },
            { q: "What does repeatability in scientific experiments refer to?", o: ["Different results under the same conditions", "Same results under the same conditions", "Different methods", "Multiple publications"], a: 1, e: "Repeatability is the closeness of agreement between results of successive measurements of the same measurand carried out under the same conditions.", d: "<strong>Repeatability:</strong> Precision under the same operating conditions over a short interval of time." },
            { q: "What is reproducibility in scientific experiments?", o: ["Different results under the same conditions", "Same results using different methods", "Results not verified", "Repetition by the same scientist"], a: 1, e: "Reproducibility refers to the ability of an entire experiment or study to be duplicated, either by the same researcher or by someone else working independently.", d: "<strong>Reproducibility:</strong> The extent to which consistent results are obtained when an experiment is repeated." },
            { q: "What paradigm replaced the phlogiston theory?", o: ["Atomic theory", "Theory of combustion", "Quantum mechanics", "Periodic table"], a: 1, e: "Lavoisier's oxygen theory of combustion replaced the phlogiston theory.", d: "<strong>Combustion Theory:</strong> Burning is a reaction with oxygen." },
            { q: "Which property does the periodic table help to predict?", o: ["Colour of elements", "Properties of elements", "Weight of elements", "Discovery date of elements"], a: 1, e: "The position of an element in the periodic table allows prediction of its chemical and physical properties.", d: "<strong>Periodicity:</strong> Recurring trends in element properties." }
        ],
        unit2: [
            { q: "What happens to the internal energy of a substance during melting?", o: ["It decreases", "It stays the same", "It increases", "It fluctuates"], a: 2, e: "Energy is absorbed to break the intermolecular bonds, increasing the internal potential energy.", d: "<strong>Internal Energy:</strong> The total energy contained within a thermodynamic system." },
            { q: "Which process involves a solid turning directly into a gas?", o: ["Melting", "Freezing", "Sublimation", "Condensation"], a: 2, e: "Sublimation is the transition from solid to gas phase without passing through the intermediate liquid phase.", d: "<strong>Sublimation:</strong> Solid → Gas." },
            { q: "Boiling occurs at:", o: ["Any temperature", "A fixed temperature", "Only at room temperature", "Any pressure"], a: 1, e: "Boiling occurs at a specific temperature called the boiling point, where vapor pressure equals atmospheric pressure.", d: "<strong>Boiling Point:</strong> The temperature at which a liquid boils." },
            { q: "During condensation, the particles in a gas:", o: ["Gain energy and move faster", "Lose energy and move slower", "Gain energy and move slower", "Lose energy and move faster"], a: 1, e: "Gas particles lose kinetic energy and slow down to form intermolecular bonds, becoming a liquid.", d: "<strong>Condensation:</strong> Gas → Liquid." },
            { q: "Which law states that the volume of a gas is directly proportional to its temperature at constant pressure?", o: ["Boyle's Law", "Charles's Law", "Avogadro's Law", "Dalton's Law"], a: 1, e: "V ∝ T (at constant P). As temperature increases, volume increases.", d: "<strong>Charles's Law:</strong> Experimental gas law that describes how gases tend to expand when heated." },
            { q: "Evaporation differs from boiling because:", o: ["Evaporation occurs at the surface of a liquid at any temperature", "Boiling occurs only at the surface", "Evaporation requires a fixed temperature", "Boiling occurs at any temperature"], a: 0, e: "Evaporation is a surface phenomenon occurring at any temperature, while boiling is a bulk phenomenon occurring at a fixed temperature.", d: "<strong>Evaporation:</strong> Vaporization from the surface of a liquid." },
            { q: "According to kinetic particle theory, the pressure of a gas increases when:", o: ["The volume increases", "The temperature decreases", "The number of particles decreases", "The temperature increases"], a: 3, e: "Higher temperature means particles have more kinetic energy, hitting the walls harder and more frequently.", d: "<strong>Kinetic Theory:</strong> Explains gas pressure as collisions of particles with container walls." },
            { q: "Which factor affects the rate of diffusion of gases?", o: ["Molecular mass", "Temperature", "Both a and b", "Neither a nor b"], a: 2, e: "Lighter molecules diffuse faster (Graham's Law), and higher temperatures increase kinetic energy and diffusion rate.", d: "<strong>Diffusion:</strong> Movement of particles from high to low concentration." },
            { q: "Solid air fresheners use the process of:", o: ["Condensation", "Deposition", "Sublimation", "Freezing"], a: 2, e: "The solid fragrance sublimes directly into gas to scent the air.", d: "<strong>Sublimation:</strong> Phase change from solid directly to gas." },
            { q: "The diffusion of medicine in the body is important because:", o: ["It controls the temperature of the medicine", "It ensures the medicine reaches all parts of the body", "It keeps the medicine in one place", "It increases the molecular mass of the medicine"], a: 1, e: "Diffusion allows the drug molecules to spread from the blood into tissues and cells.", d: "<strong>Bioavailability:</strong> The proportion of a drug or other substance which enters the circulation when introduced into the body." }
        ],
        unit3: [
            { q: "What mass of CO₂ is produced by the combustion of each mol of CH₄? Equation: CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l)", o: ["16g", "44g", "32g", "none"], a: 1, e: "1 mole of CH₄ produces 1 mole of CO₂. Molar mass of CO₂ = 12 + (16×2) = 44 g/mol.", d: "<strong>Molar Mass:</strong> Mass of one mole of a substance." },
            { q: "A flask contains 500 cm³ of SO₂ at RTP. The flask contains;", o: ["32 g", "2.4 g", "64 g", "1.33 g"], a: 3, e: "Moles = Volume / 24000 cm³ = 500 / 24000 = 0.0208 mol. Mass = Moles × Mr = 0.0208 × 64 = 1.33 g.", d: "<strong>RTP:</strong> Room Temperature and Pressure (24 dm³/mol)." },
            { q: "A necklace has 6g of diamond in it. How many carbon atoms are present in it?", o: ["1", "0.5", "1.5", "0.25"], a: 1, e: "Moles = Mass / Ar = 6 / 12 = 0.5 moles. (Note: Question asks for moles or atoms? Options imply moles).", d: "<strong>Mole:</strong> Amount of substance containing Avogadro's number of particles." },
            { q: "What is the mass of aluminium in 204 g of the aluminium oxide, Al₂O₃?", o: ["26 g", "27 g", "54 g", "108 g"], a: 3, e: "Mr of Al₂O₃ = (27×2) + (16×3) = 102. Moles = 204/102 = 2. Al moles = 2 × 2 = 4. Mass = 4 × 27 = 108 g.", d: "<strong>Stoichiometry:</strong> Calculation of reactants and products in chemical reactions." },
            { q: "The reactant which is consumed earlier and gives least quantity of product is called;", o: ["Reactant in excess", "Stoichiometry", "Limiting reactant", "Stoichiometric amount"], a: 2, e: "The limiting reactant determines the maximum amount of product that can be formed.", d: "<strong>Limiting Reactant:</strong> The substance that is totally consumed when the chemical reaction is complete." },
            { q: "Which one of the following compounds contains the highest percentage by mass of nitrogen?", o: ["NH₃", "N₂H₄", "NO", "NH₄OH"], a: 1, e: "N₂H₄: (28/32)*100 = 87.5%. NH₃: (14/17)*100 = 82.3%.", d: "<strong>Percentage Composition:</strong> The percentage by mass of each element in a compound." },
            { q: "Vitamin A has a molecular formula of C₂₀H₃₀O. The number of moles of vitamin A in 500 mg of its capsule will be;", o: ["1.7", "1.7 x 10⁻³", "1.05", "3.01 x 10⁻³"], a: 1, e: "Mr = (12×20) + (1×30) + 16 = 286. Mass = 0.5 g. Moles = 0.5 / 286 ≈ 0.00174 mol.", d: "<strong>Mole Calculation:</strong> n = m / M." },
            { q: "When one mole of each of the following is completely burnt in oxygen, which will give the largest mass of CO₂?", o: ["Carbon monoxide", "Diamond", "Ethane", "Methane"], a: 2, e: "Ethane (C₂H₆) has 2 carbons, producing 2 moles of CO₂. Others have 1 carbon.", d: "<strong>Combustion:</strong> Reaction with oxygen releasing heat." },
            { q: "One mole of ethanol and one mole of ethane have an equal;", o: ["Mass", "Number of atoms", "Number of electrons", "Number of molecules"], a: 3, e: "One mole of any substance contains Avogadro's number (6.022 × 10²³) of molecules.", d: "<strong>Avogadro's Constant:</strong> 6.022 × 10²³ particles per mole." },
            { q: "How many moles of oxygen are needed for the complete combustion of two moles of butane, C₄H₁₀? Equation: 2C₄H₁₀(g) + 13O₂(g) → 8CO₂(g) + 10H₂O(l)", o: ["12 mol", "13 mol", "4 mol", "10 mol"], a: 1, e: "From the balanced equation, 2 moles of butane react with 13 moles of oxygen.", d: "<strong>Mole Ratio:</strong> The ratio of moles of one substance to another in a balanced chemical equation." }
        ],
        unit4: [
            { q: "Which of the following statements is not correct about the galvanic cell?", o: ["Cations are reduced at the cathode", "Anions are oxidized at the anode", "Electrons flow from cathode to anode", "Oxidation occurs at the anode"], a: 2, e: "Electrons flow from the Anode (oxidation site) to the Cathode (reduction site) in the external circuit.", d: "<strong>Galvanic Cell:</strong> An electrochemical cell that derives electrical energy from spontaneous redox reactions." },
            { q: "Which of the following is not true about the Daniel cell", o: ["Half-cell of an active metal acts as a cathode.", "Half-cell contains an element in contact with its ions in aqueous solution.", "A salt bridge connects the two half-cells.", "A spontaneous oxidation-reduction reaction generates electricity."], a: 0, e: "In a Daniel cell (Zn/Cu), Zinc is more active and acts as the Anode, not Cathode.", d: "<strong>Daniel Cell:</strong> A type of electrochemical cell involving Zinc and Copper." },
            { q: "Which of the following does not involve an electrolytic process?", o: ["Refining of copper", "Manufacture of sodium from NaCl", "Electroplating of steel", "Reduction of metal oxide by a reducing agent."], a: 3, e: "Reduction by a reducing agent (like Carbon) is a chemical process, not electrolytic.", d: "<strong>Electrolysis:</strong> Process of using electricity to drive a non-spontaneous chemical reaction." },
            { q: "Galvanizing is", o: ["Coating with Sn", "Coating with Zn", "Coating with Cr", "Coating with Cu"], a: 1, e: "Galvanizing is the process of applying a protective zinc coating to steel or iron.", d: "<strong>Galvanization:</strong> Zinc coating to prevent rusting." },
            { q: "Which of the following is true for the Nelson cell?", o: ["Sodium metal is produced at the anode", "Chlorine gas is produced at anode", "Hydrogen gas is produced at the anode", "Sodium ions are not reduced at the cathode"], a: 1, e: "In the Nelson cell (brine electrolysis), Chloride ions are oxidized at the anode to form Chlorine gas.", d: "<strong>Nelson Cell:</strong> Used for the production of Sodium Hydroxide and Chlorine." },
            { q: "Electroplating involves:", o: ["Using an electrolyte to oxidize a metal.", "Coating a metal object with a thin layer of metal through electrolysis.", "Melting a metal object to form a thin coating.", "Using heat to form a layer of metal on another metal object"], a: 1, e: "Electroplating uses electrical current to reduce dissolved metal cations so that they form a thin coherent metal coating on an electrode.", d: "<strong>Electroplating:</strong> Plating one metal onto another by hydrolysis." },
            { q: "In a voltaic cell, the salt bridge serves the function of:", o: ["Preventing electrons from flowing in the external circuit.", "Maintaining electrical neutrality by allowing ion movement.", "Storing excess energy from the cell.", "Generating additional voltage for the cell."], a: 1, e: "The salt bridge completes the circuit by allowing ions to flow, preventing charge buildup.", d: "<strong>Salt Bridge:</strong> A laboratory device used to connect the oxidation and reduction half-cells of a galvanic cell." },
            { q: "If the voltage data shows metal A has a higher standard reduction potential than metal B, it can be concluded that:", o: ["Metal A is more reactive than metal B.", "Metal B is more reactive than metal A.", "Metal A and metal B have the same reactivity.", "Metal A is less likely to gain electrons than metal B."], a: 1, e: "Higher reduction potential means greater tendency to be reduced (gain electrons). Therefore, A is less reactive (less likely to lose electrons) than B.", d: "<strong>Reduction Potential:</strong> A measure of the tendency of a chemical species to acquire electrons." }
        ],
        unit5: [
            { q: "The rate of reaction ______ as the reaction proceeds", o: ["Increases", "Decreases", "Remains the same", "May increase or decrease"], a: 1, e: "As reactants are consumed, their concentration decreases, leading to fewer collisions and a slower rate.", d: "<strong>Reaction Rate:</strong> Speed at which reactants are converted into products." },
            { q: "The activation energy for a reaction can be", o: ["Increased by increasing temperature", "Increased by decreasing temperature", "Decreased by increasing concentration of reactants", "None of these"], a: 3, e: "Activation energy is a property of the reaction pathway and is only changed by a catalyst.", d: "<strong>Activation Energy:</strong> Minimum energy required to start a reaction." },
            { q: "Reactions with high activation energy are usually", o: ["Fast", "Slow", "Exothermic", "Reversible"], a: 1, e: "High activation energy means fewer molecules have enough energy to react, resulting in a slow reaction.", d: "<strong>Kinetics:</strong> Study of reaction rates." },
            { q: "In a reversible reaction catalyst lowers the activation energy of the", o: ["Forward reaction", "Reverse Reaction", "Forward as well as reverse reaction", "Forward reaction but increases for the reverse reaction"], a: 2, e: "A catalyst provides an alternative pathway with lower activation energy for both directions.", d: "<strong>Catalyst:</strong> Substance that increases reaction rate without being consumed." },
            { q: "Which of the following is NOT a factor affecting the rate of reaction according to collision theory?", o: ["Number of particles per unit volume", "Activation energy", "Presence of a catalyst", "Molar mass of reactants"], a: 3, e: "Molar mass itself is not a direct factor in collision theory, unlike concentration, energy, and orientation.", d: "<strong>Collision Theory:</strong> Reactions occur when particles collide with sufficient energy and correct orientation." },
            { q: "How does a catalyst increase the rate of reaction?", o: ["By decreasing the number of particles per unit volume", "By increasing the activation energy", "By providing an alternate pathway with higher activation energy", "By providing an alternate pathway with lower activation energy"], a: 3, e: "Catalysts lower the energy barrier, allowing more particles to react.", d: "<strong>Catalysis:</strong> The process of increasing the rate of a chemical reaction by adding a substance known as a catalyst." },
            { q: "Which physical parameter is NOT typically affected by the rate of reaction?", o: ["Change in mass", "Temperature", "Formation of gas", "Colour of the reactants"], a: 1, e: "Temperature is a factor that *affects* the rate, not a parameter changed *by* the rate itself (though exothermic reactions release heat).", d: "<strong>Rate Factors:</strong> Temperature, Concentration, Surface Area, Catalyst." },
            { q: "Which factor can affect the rate of reaction involving gases?", o: ["Change in solubility", "Change in pressure", "Change in volume", "Change in viscosity"], a: 1, e: "Increasing pressure on gases increases concentration (particles per volume), increasing collision frequency.", d: "<strong>Pressure:</strong> Force exerted per unit area." },
            { q: "Increasing the surface area of solids generally:", o: ["Decreases the rate of reaction", "Increases the rate of reaction", "Has no effect on the rate of reaction", "Makes the reaction irreversible"], a: 1, e: "More surface area means more particles are exposed for collisions.", d: "<strong>Surface Area:</strong> The total area of the surface of a three-dimensional object." },
            { q: "How does temperature affect the rate of reaction according to collision theory?", o: ["Higher temperature decreases the frequency of collisions", "Higher temperature increases the activation energy", "Higher temperature decreases the kinetic energy of particles", "Higher temperature increases the frequency of collisions and kinetic energy of particles"], a: 3, e: "Higher T means faster particles (more collisions) and more energetic particles (more effective collisions).", d: "<strong>Kinetic Energy:</strong> Energy of motion." }
        ],
        unit6: [
            { q: "Which of the following salts is soluble in water?", o: ["Silver chloride (AgCl)", "Lead carbonate (PbCO₃)", "Sodium nitrate (NaNO₃)", "Lead chloride (PbCl₂)"], a: 2, e: "All nitrates are soluble.", d: "<strong>Solubility Rules:</strong> Guidelines to predict whether an ionic compound is soluble." },
            { q: "What type of ions do bases provide for salt formation?", o: ["Negative ions", "Positive ions", "Neutral molecules", "Complex ions"], a: 1, e: "Bases (like NaOH) provide the cation (Na+) for the salt.", d: "<strong>Base:</strong> A substance that accepts protons or releases hydroxide ions." },
            { q: "What is the primary reason salts have high melting points?", o: ["Weak van der Waals forces", "Strong electrostatic forces", "Hydrogen bonding", "Covalent bonding"], a: 1, e: "Ionic bonds are strong electrostatic attractions between oppositely charged ions.", d: "<strong>Ionic Bond:</strong> Electrostatic attraction between ions." },
            { q: "In what state are salts generally good conductors of electricity?", o: ["Solid", "Gas", "Molten", "Powdered"], a: 2, e: "In molten or aqueous state, ions are free to move and conduct electricity.", d: "<strong>Electrolyte:</strong> A substance that conducts electricity when dissolved in water or melted." },
            { q: "Which of the following is a general solubility rule for chlorides?", o: ["All chlorides are insoluble.", "All chlorides are soluble.", "Chlorides are soluble except lead and silver chlorides.", "Chlorides are soluble except sodium and potassium chlorides."], a: 2, e: "AgCl and PbCl₂ are classic insoluble chlorides.", d: "<strong>Precipitate:</strong> An insoluble solid that emerges from a liquid solution." },
            { q: "What happens to the ions in a salt when it is dissolved in water?", o: ["They form a gas.", "They become fixed in place.", "They become mobile.", "They form a solid."], a: 2, e: "Dissociation separates the ions, allowing them to move freely.", d: "<strong>Dissociation:</strong> The splitting of a molecule into smaller molecules, atoms, or ions." },
            { q: "Which of the following methods is used to prepare a salt by titration?", o: ["Acid + Metal", "Acid + Insoluble Base", "Acid + Insoluble Carbonate", "Acid + Alkali"], a: 3, e: "Titration is used for soluble reactants (Acid + Soluble Base/Alkali).", d: "<strong>Titration:</strong> A technique where a solution of known concentration is used to determine the concentration of an unknown solution." },
            { q: "Which of these salts is insoluble in water?", o: ["Potassium carbonate (K₂CO₃)", "Ammonium nitrate (NH₄NO₃)", "Calcium Chloride (CaCl₂)", "Lead chloride (PbCl₂)"], a: 3, e: "Lead chloride is insoluble in cold water (soluble in hot).", d: "<strong>Insoluble:</strong> Incapable of being dissolved." },
            { q: "What is formed when an acid reacts with an excess of an insoluble base?", o: ["Salt and hydrogen", "Salt and water", "Salt and carbon dioxide", "Salt and oxygen"], a: 1, e: "Acid + Base → Salt + Water (Neutralization).", d: "<strong>Neutralization:</strong> Reaction between an acid and a base." },
            { q: "Which ion is commonly found in soluble nitrates?", o: ["NH₄⁺", "NO₃⁻", "Cl⁻", "CO₃²⁻"], a: 1, e: "The nitrate ion is NO₃⁻.", d: "<strong>Nitrate:</strong> A polyatomic ion with formula NO₃⁻." }
        ],
        unit7: [
            { q: "What is a key component of photochemical smog formed by the reaction of NO and NO₂ with unburned hydrocarbons?", o: ["Sulfuric acid", "Peroxyacetyl nitrate (PAN)", "Carbon monoxide", "Ozone"], a: 1, e: "PAN is a secondary pollutant present in photochemical smog.", d: "<strong>Photochemical Smog:</strong> Air pollution produced by the action of sunlight on hydrocarbons and nitrogen oxides." },
            { q: "Which of the following is the balanced equation for the production of ammonia in the Haber process?", o: ["N₂(g) + H₂(g) ⇌ NH₃(g)", "N₂(g) + 2H₂(g) ⇌ 2NH₃(g)", "N₂(g) + 3H₂(g) ⇌ 2NH₃(g)", "2N₂(g) + 3H₂(g) ⇌ 2NH₃(g)"], a: 2, e: "1 mole of Nitrogen reacts with 3 moles of Hydrogen to form 2 moles of Ammonia.", d: "<strong>Haber Process:</strong> Industrial process for producing ammonia." },
            { q: "What are the sources of hydrogen and nitrogen in the Haber process?", o: ["Water and air", "Methane and air", "Methane and water", "Water and methane"], a: 1, e: "Nitrogen from air, Hydrogen from methane (natural gas).", d: "<strong>Feedstock:</strong> Raw material to supply or fuel a machine or industrial process." },
            { q: "Which catalyst is used in the Haber process?", o: ["Platinum", "Vanadium(V) oxide", "Iron", "Nickel"], a: 2, e: "Finely divided iron is the catalyst.", d: "<strong>Iron Catalyst:</strong> Used to speed up ammonia production." },
            { q: "At what temperature is the Haber process typically conducted?", o: ["300°C", "450°C", "600°C", "200°C"], a: 1, e: "450°C is a compromise temperature for rate and yield.", d: "<strong>Optimum Conditions:</strong> Conditions that give the best balance of yield and rate." },
            { q: "What is the symbol equation for the conversion of sulphur dioxide to sulphur trioxide in the Contact process?", o: ["SO₂(g) + O₂(g) ⇌ SO₃(g)", "2SO₂(g) + O₂(g) ⇌ 2SO₃(g)", "SO₂(g) + 2O₂(g) ⇌ 2SO₃(g)", "2SO₂(g) + O₂(g) ⇌ SO₃(g)"], a: 1, e: "2SO₂ + O₂ ⇌ 2SO₃.", d: "<strong>Contact Process:</strong> Industrial method of producing sulfuric acid." },
            { q: "Which catalyst is used in the Contact process for the conversion of SO₂ to SO₃?", o: ["Iron", "Vanadium(V) oxide", "Platinum", "Nickel"], a: 1, e: "Vanadium(V) oxide (V₂O₅) is the catalyst.", d: "<strong>V₂O₅:</strong> Catalyst for SO₂ oxidation." },
            { q: "What are the sources of sulphur dioxide in the Contact process?", o: ["Burning sulphur or roasting sulphide ores", "Burning methane", "Electrolysis of water", "Combustion of natural gas"], a: 0, e: "S + O₂ → SO₂ or roasting ores like Pyrite (FeS₂).", d: "<strong>Roasting:</strong> Heating of sulfide ore to high temperature in presence of air." },
            { q: "How do amphoteric oxides react with acids and bases?", o: ["Forming a salt and water", "Forming an acid and a gas", "Forming a base and hydrogen", "Forming a salt and hydrogen"], a: 0, e: "Amphoteric oxides act as both base (with acid) and acid (with base), producing salt and water.", d: "<strong>Amphoteric:</strong> Able to react both as a base and as an acid." },
            { q: "Which of the following oxides is amphoteric?", o: ["SO₂", "CO₂", "CuO", "Al₂O₃"], a: 3, e: "Aluminum oxide (Al₂O₃) and Zinc oxide (ZnO) are common amphoteric oxides.", d: "<strong>Al₂O₃:</strong> Aluminum Oxide." }
        ],
        unit8: [
            { q: "Which of the following correctly represents the formula for but-2-ene?", o: ["CH₃CH=CHCH₃", "CH₂=CHCH₂CH₃", "CH₃CH₂CH=CH₂", "CH₃C≡CHCH₃"], a: 0, e: "But-2-ene has a double bond between the 2nd and 3rd carbons.", d: "<strong>Alkene:</strong> Unsaturated hydrocarbon with a double bond." },
            { q: "Given the molecular formula C₄H₁₀O, which compound is most likely to be represented by this formula?", o: ["Butanoic acid", "Butan-1-ol", "But-2-ene", "Butanal"], a: 1, e: "CnH2n+2O is the general formula for alcohols (and ethers). C4H10O fits Butanol.", d: "<strong>Alcohol:</strong> Organic compound with an -OH group." },
            { q: "Which of the following is the correct IUPAC name for the compound with the formula CH₃CH₂CH₂COOH?", o: ["Butanoic acid", "Propanoic acid", "Butanal", "Butanol"], a: 0, e: "4 carbons including the carboxyl carbon = Butanoic acid.", d: "<strong>Carboxylic Acid:</strong> Organic acid containing a carboxyl group (-COOH)." },
            { q: "Identify the statement which is true regarding the propan-1-ol and propan-2-ol.", o: ["Both have identical condensed structural formula.", "They have the same molecular formula.", "They are different compounds with the same structural formula.", "Propan-1-ol is a carboxylic acid, and propan-2-ol is an ester."], a: 1, e: "They are isomers (C₃H₈O). Same molecular formula, different structures.", d: "<strong>Isomers:</strong> Compounds with the same formula but different arrangement of atoms." },
            { q: "Name the compound that can be formed by the esterification of methanol and propanoic acid.", o: ["Methyl propanoate", "Propyl methanoate", "Ethyl propanoate", "Propyl ethanoate"], a: 0, e: "Alcohol (Methanol) becomes the alkyl group (Methyl), Acid (Propanoic) becomes the alkanoate (Propanoate).", d: "<strong>Esterification:</strong> Reaction between an alcohol and an acid to form an ester." },
            { q: "Which of the following molecules contains an -OH functional group?", o: ["Butane", "Ethene", "Butan-1-ol", "But-2-yne"], a: 2, e: "The suffix '-ol' indicates an alcohol group (-OH).", d: "<strong>Hydroxyl Group:</strong> -OH functional group." },
            { q: "If a compound ends in \"-oic acid\", what functional group must it contain?", o: ["-OH", "-COOH", "-C=O", "-C≡C-"], a: 1, e: "-oic acid is the suffix for carboxylic acids.", d: "<strong>Functional Group:</strong> Specific group of atoms responsible for the characteristic chemical reactions of those molecules." },
            { q: "Which formula corresponds to an ester that could be formed from butan-1-ol and ethanoic acid?", o: ["CH₃CH₂CH₂CH₂COOCH₃", "CH₃COOCH₂CH₂CH₂CH₃", "CH₃CH₂CH₂CH₂CH₂COOH", "CH₃CH₂COOCH₃"], a: 1, e: "Ethanoic acid provides CH₃COO-, Butanol provides -C₄H₉. Product: Butyl ethanoate (CH₃COOC₄H₉). Note: Option B is Butyl ethanoate.", d: "<strong>Ester:</strong> Compound derived from an acid in which at least one -OH group is replaced by an -O-alkyl group." },
            { q: "Which structural formula represents butan-1-ol?", o: ["CH₃CH₂CH₂CH₂OH", "CH₃CH₂CH₂CH₂COOH", "CH₃CH₂CH=CH₂", "CH₃CH=CHCH₃"], a: 0, e: "4 carbons chain with OH at the end.", d: "<strong>Structural Formula:</strong> Shows the arrangement of atoms in the molecule of a compound." },
            { q: "Identify the compound based on the following information: It has the formula C₃H₈O and the name ends with \"-ol\".", o: ["Propanoate", "Propan-2-ol", "Propane", "Propanoic acid"], a: 1, e: "C3H8O is an alcohol. Propan-2-ol fits.", d: "<strong>Nomenclature:</strong> System of naming chemical compounds." },
            { q: "Which of the following names is incorrect for the given formula?", o: ["But-2-ene: CH₃CH₂CH=CH₂", "But-1-ene: CH₂=CHCH₂CH₃", "Butane: CH₃CH₂CH₂CH₃", "Butan-2-ol: CH₃CH(OH)CH₂CH₃"], a: 0, e: "CH₃CH₂CH=CH₂ is But-1-ene, not But-2-ene.", d: "<strong>IUPAC Naming:</strong> Standardized naming for chemistry." }
        ],
        unit9: [
            { q: "What Alkenes have one or more double bonds between carbon atoms? They have the general formula CₙH₂ₙ. When two carbon atoms share two pairs of electrons, they form a double bond between the carbon atoms. How many electrons are left on each carbon atom?", o: ["2", "3", "1", "4"], a: 0, e: "Carbon has 4 valence electrons. 2 are used in the double bond. 2 are left to bond with other atoms (like Hydrogen).", d: "<strong>Valency:</strong> Combining power of an element." },
            { q: "The type of bond present between the carbon atoms in alkynes is:", o: ["Single covalent bond", "Double covalent bond", "Triple covalent bond", "Saturated covalent bond"], a: 2, e: "Alkynes are characterized by at least one triple bond.", d: "<strong>Alkyne:</strong> Unsaturated hydrocarbon with a triple bond." },
            { q: "Alkenes are classified as:", o: ["Saturated hydrocarbons", "Unsaturated hydrocarbons", "Aromatic hydrocarbons", "None of the above"], a: 1, e: "Unsaturated means they contain double or triple bonds.", d: "<strong>Unsaturated:</strong> Having carbon-carbon double or triple bonds." },
            { q: "Cracking of large alkane molecules requires:", o: ["Low temperature and pressure", "High temperature and catalyst", "Low temperature and catalyst", "High temperature and high pressure"], a: 1, e: "Cracking needs heat and often a catalyst (like silica/alumina) to break bonds.", d: "<strong>Cracking:</strong> Breaking down complex organic molecules into simpler molecules." },
            { q: "Which of the following is a product of cracking large alkane molecules?", o: ["Carbon dioxide", "Alkenes", "Water", "Hydrogen"], a: 1, e: "Cracking produces smaller alkanes and alkenes (and sometimes hydrogen).", d: "<strong>Alkene Production:</strong> Major industrial source is cracking." },
            { q: "The chemical test to distinguish between alkanes and alkenes involves:", o: ["Limewater", "Bromine water", "Litmus paper", "Universal indicator"], a: 1, e: "Alkenes decolorize bromine water (orange to colourless); alkanes do not.", d: "<strong>Bromine Test:</strong> Test for unsaturation." },
            { q: "Alkynes contain which type of carbon-carbon bond?", o: ["Single covalent bond", "Double covalent bond", "Triple covalent bond", "Saturated covalent bond"], a: 2, e: "Triple bond is the defining feature of alkynes.", d: "<strong>Triple Bond:</strong> A chemical bond between two atoms involving six bonding electrons." },
            { q: "Ethyne is commonly used for:", o: ["Cooking", "Welding", "Fuel for cars", "Heating"], a: 1, e: "Oxy-acetylene (ethyne) torches produce very high temperatures for welding.", d: "<strong>Ethyne (Acetylene):</strong> C₂H₂." },
            { q: "Fractional distillation separates petroleum into fractions based on:", o: ["Density", "Boiling point", "Viscosity", "Solubility"], a: 1, e: "Different hydrocarbons have different boiling points depending on chain length.", d: "<strong>Fractional Distillation:</strong> Separation of a liquid mixture into fractions differing in boiling point." },
            { q: "Which property increases as you move from the bottom to the top of the fractionating column?", o: ["Volatility", "Chain length", "Boiling point", "Viscosity"], a: 0, e: "Top fractions are smaller molecules with lower boiling points and higher volatility.", d: "<strong>Volatility:</strong> Tendency of a substance to evaporate." },
            { q: "The gasoline/petrol fraction from petroleum is primarily used for:", o: ["Jet fuel", "Heating", "Car fuel", "Chemical feedstock"], a: 2, e: "Gasoline is the main fuel for internal combustion engines in cars.", d: "<strong>Gasoline:</strong> A volatile flammable mixture of hydrocarbons." },
            { q: "Doubly bonded carbon atoms form which type of bond with two other atoms.", o: ["Single", "Double", "Trible", "Non"], a: 0, e: "In ethene (C=C), each carbon forms a double bond with the other carbon and single bonds with two hydrogens.", d: "<strong>Covalent Bond:</strong> A chemical bond that involves the sharing of electron pairs between atoms." }
        ],
        unit10: [
            { q: "What is the optimal temperature range for the fermentation of glucose to produce ethanol?", o: ["0-10°C", "25-35°C", "50-60°C", "70-80°C"], a: 1, e: "Yeast enzymes work best at this range (mesophilic). Temperatures above 40°C can denature the enzymes, stopping the reaction.", d: "<strong>Fermentation:</strong> Metabolic process that produces chemical changes in organic substrates through the action of enzymes." },
            { q: "Which organism is used in the fermentation process to produce ethanol?", o: ["Bacteria", "Yeast", "Algae", "Molds"], a: 1, e: "Yeast contains zymase enzymes which catalyze the breakdown of glucose into ethanol and carbon dioxide.", d: "<strong>Yeast:</strong> Single-celled microorganisms classified as members of the fungus kingdom." },
            { q: "What is the catalyst used in the catalytic hydration of ethene to ethanol?", o: ["Sulfuric acid", "Hydrochloric acid", "Phosphoric acid", "Nitric acid"], a: 2, e: "Phosphoric acid (H₃PO₄) absorbed on silica is the standard catalyst for industrial hydration of ethene at 300°C and 60 atm.", d: "<strong>Hydration:</strong> A chemical reaction in which a substance combines with water." },
            { q: "What is the primary by-product of ethanol fermentation?", o: ["Methane", "Oxygen", "Carbon dioxide", "Water"], a: 2, e: "The reaction is C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.", d: "<strong>By-product:</strong> A secondary product derived from a manufacturing process or chemical reaction." },
            { q: "Which of the following is a major advantage of using ethanol as a fuel?", o: ["High cost", "Non-renewable", "Clean burning", "Low energy density"], a: 2, e: "Ethanol burns cleanly to produce CO₂ and H₂O, producing fewer pollutants than gasoline. It is also renewable.", d: "<strong>Biofuel:</strong> Fuel derived directly from living matter." },
            { q: "What is the chemical formula for ethanol?", o: ["CH₃OH", "C₂H₆", "C₂H₅OH", "C₃H₇OH"], a: 2, e: "Ethanol has an ethyl group (C₂H₅) attached to a hydroxyl group (OH).", d: "<strong>Chemical Formula:</strong> A set of chemical symbols showing the elements present in a compound." },
            { q: "Which process requires high pressure and temperature for ethanol production?", o: ["Fermentation", "Catalytic hydration", "Distillation", "Sublimation"], a: 1, e: "Direct hydration of ethene requires 300°C and 60-70 atm pressure. Fermentation is low temp/pressure.", d: "<strong>Industrial Process:</strong> Procedures involving chemical, physical, electrical or mechanical steps." },
            { q: "Ethanol combustion primarily produces:", o: ["CO and H₂O", "CO₂ and H₂", "CO₂ and H₂O", "CO and H₂"], a: 2, e: "Complete combustion of any hydrocarbon or alcohol produces carbon dioxide and water.", d: "<strong>Combustion:</strong> High-temperature exothermic redox chemical reaction between a fuel and an oxidant." },
            { q: "What is the disadvantage of ethanol production through fermentation?", o: ["High-temperature requirement", "Slow process", "High-pressure requirement", "Uses non-renewable resources"], a: 1, e: "Fermentation is a batch process and takes days to complete, whereas hydration is continuous and fast.", d: "<strong>Batch Process:</strong> A process where the feed is placed into a vessel, processed, and then removed." },
            { q: "Which industry uses alcohol extensively as a solvent?", o: ["Agriculture", "Pharmaceuticals", "Mining", "Construction"], a: 1, e: "Ethanol is a versatile solvent used in medicines, perfumes, and cosmetics because it dissolves both polar and non-polar substances.", d: "<strong>Solvent:</strong> A substance that dissolves a solute, resulting in a solution." }
        ],
        unit11: [
            { q: "What is the product of the reaction between ethanoic acid and sodium carbonate?", o: ["Sodium propanoate", "Sodium hydroxide", "Sodium chloride", "Sodium acetate"], a: 3, e: "Acid + Carbonate → Salt + Water + CO₂. CH₃COOH + Na₂CO₃ → CH₃COONa (Sodium ethanoate/acetate).", d: "<strong>Salt:</strong> An ionic compound formed by the neutralization reaction of an acid and a base." },
            { q: "Which catalyst is used in the esterification reaction between a carboxylic acid and an alcohol?", o: ["Potassium manganate(VII)", "Sulfuric acid", "Sodium hydroxide", "Hydrochloric acid"], a: 1, e: "Concentrated sulfuric acid acts as a dehydrating agent and catalyst to push the equilibrium towards the ester.", d: "<strong>Esterification:</strong> The reaction between an alcohol and a carboxylic acid to form an ester and water." },
            { q: "What is the main component of vinegar?", o: ["Ethanol", "Methanol", "Propanoic acid", "Ethanoic acid"], a: 3, e: "Vinegar is a dilute solution (about 5-8%) of ethanoic acid in water.", d: "<strong>Vinegar:</strong> An aqueous solution of acetic acid." },
            { q: "What gas is produced when a carboxylic acid reacts with a metal?", o: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"], a: 2, e: "Acid + Reactive Metal → Salt + Hydrogen gas.", d: "<strong>Displacement Reaction:</strong> A reaction where a more reactive element displaces a less reactive element." },
            { q: "Which compound is formed by the bacterial oxidation of ethanol?", o: ["Methanoic acid", "Propanoic acid", "Ethanoic acid", "Butanoic acid"], a: 2, e: "Bacteria (Acetobacter) oxidize ethanol in the presence of air to form ethanoic acid (souring of wine).", d: "<strong>Oxidation:</strong> The loss of electrons or an increase in oxidation state." },
            { q: "What type of bond is formed between a carboxylic acid and an alcohol during esterification?", o: ["Ionic bond", "Hydrogen bond", "Covalent bond", "Metallic bond"], a: 2, e: "An ester link (-COO-) is formed. It is a covalent bond.", d: "<strong>Covalent Bond:</strong> A chemical bond that involves the sharing of electron pairs between atoms." },
            { q: "Which of the following is an example of a carboxylic acid?", o: ["Ethanol", "Ethanoic acid", "Ethyl acetate", "Methanol"], a: 1, e: "Ethanoic acid contains the -COOH group. Ethanol is alcohol, Ethyl acetate is ester.", d: "<strong>Carboxylic Acid:</strong> An organic acid containing a carboxyl group (-COOH)." },
            { q: "In the oxidation of ethanol to ethanoic acid, what is the role of potassium manganate(VII)?", o: ["Reducing agent", "Oxidizing agent", "Catalyst", "Inhibitor"], a: 1, e: "Potassium manganate(VII) provides the oxygen required to convert ethanol to ethanoic acid.", d: "<strong>Oxidizing Agent:</strong> A substance that tends to bring about oxidation by being reduced." },
            { q: "What is produced when ethanoic acid reacts with sodium hydroxide?", o: ["Sodium chloride", "Sodium ethanoate", "Sodium oxide", "Sodium bicarbonate"], a: 1, e: "Acid + Base → Salt + Water. CH₃COOH + NaOH → CH₃COONa + H₂O.", d: "<strong>Neutralization:</strong> A chemical reaction in which acid and a base react quantitatively." }
        ],
        unit12: [
            { q: "Which of the following best defines polymers?", o: ["Small molecules bonded together to form large molecules", "Large molecules built up from many smaller molecules called monomers", "Simple molecules consisting of one type of atom", "Large molecules made up of metals and non-metals"], a: 1, e: "Poly = many, mer = parts. Polymers are macromolecules.", d: "<strong>Polymer:</strong> A substance consisting of a large number of similar units bonded together." },
            { q: "What type of linkage is found in polyamides?", o: ["Ester linkage", "Amide linkage", "Glycosidic linkage", "Phosphodiester linkage"], a: 1, e: "Polyamides (like Nylon) are formed by amide linkages (-CONH-).", d: "<strong>Amide Linkage:</strong> The chemical bond -CO-NH- formed between a carboxylic acid group and an amine group." },
            { q: "Polyethylene is an example of:", o: ["A condensation polymer", "An addition polymer", "A copolymer", "A natural polymer"], a: 1, e: "Formed by the addition reaction of ethene monomers without the elimination of a small molecule.", d: "<strong>Addition Polymerization:</strong> Polymerization where monomers add together without the loss of any atoms." },
            { q: "The repeating unit of the addition polymer formed from ethene is:", o: ["-CH₂-CH₂-", "-CH-CH-", "-CH₂-CH-", "-C-C-"], a: 0, e: "The double bond in ethene (CH₂=CH₂) breaks to form single bonds connecting the units.", d: "<strong>Repeating Unit:</strong> The structural unit in a polymer chain that repeats." },
            { q: "Nylon-6,6 is an example of a:", o: ["Polyester", "Polyamide", "Polysaccharide", "Polyurethane"], a: 1, e: "Nylon is a synthetic polymer linked by amide bonds.", d: "<strong>Nylon:</strong> A tough, lightweight, elastic synthetic polymer." },
            { q: "Which of the following processes produces water as a by-product?", o: ["Addition polymerisation", "Condensation polymerisation", "Hydrogenation", "Hydrolysis"], a: 1, e: "Monomers join with the elimination of a small molecule like water or HCl.", d: "<strong>Condensation Polymerization:</strong> Polymerization where monomers react to form a polymer and a small molecule." },
            { q: "Which statement is not true about PET?", o: ["It cannot be recycled", "It is a polyamide", "It can be converted back into monomers and re-polymerised", "It is used only in textiles"], a: 0, e: "PET (Polyethylene terephthalate) is widely recycled. (Note: PET is a polyester, not a polyamide, but 'cannot be recycled' is the intended false statement in this context).", d: "<strong>PET:</strong> A thermoplastic polymer resin of the polyester family." },
            { q: "What is a major environmental challenge caused by plastics?", o: ["They are biodegradable", "They are easily recycled", "They accumulate in oceans", "They are non-toxic when burned"], a: 2, e: "Most plastics are non-biodegradable and persist in the environment for hundreds of years.", d: "<strong>Non-biodegradable:</strong> Not capable of being broken down by biological processes." },
            { q: "Polyesters are formed from:", o: ["Dicarboxylic acids and diamines", "Dicarboxylic acids and diols", "Diols and diamines", "Monocarboxylic acids and diols"], a: 1, e: "Acid group (-COOH) reacts with Alcohol group (-OH) to form Ester linkage (-COO-).", d: "<strong>Polyester:</strong> A category of polymers that contain the ester functional group in their main chain." },
            { q: "Which of the following is NOT a property of plastics?", o: ["They are lightweight", "They are durable", "They are easily decomposed by microorganisms", "They are versatile in application"], a: 2, e: "Plastics are generally resistant to biological decay (non-biodegradable).", d: "<strong>Durability:</strong> The ability to withstand wear, pressure, or damage." }
        ],
        unit13: [
            { q: "Which of the following is NOT a function of proteins in the body?", o: ["Acting as enzymes", "Storing genetic information", "Providing structural support", "Transporting molecules"], a: 1, e: "Storing genetic information is the function of Nucleic Acids (DNA/RNA). Proteins do structural support, transport, enzymes, etc.", d: "<strong>Protein:</strong> Large biomolecules and macromolecules that comprise one or more long chains of amino acid residues." },
            { q: "Which of the following best describes proteins?", o: ["Polysaccharides", "Polymers of amino acids", "Chains of fatty acids", "Simple sugars"], a: 1, e: "Proteins are polypeptide chains made of amino acid monomers.", d: "<strong>Amino Acid:</strong> Organic compounds that contain amine and carboxyl functional groups." },
            { q: "Which bond is responsible for linking amino acids together in a protein?", o: ["Hydrogen bond", "Peptide bond", "Ionic bond", "Covalent bond"], a: 1, e: "A peptide bond is an amide type of covalent chemical bond linking two consecutive alpha-amino acids.", d: "<strong>Peptide Bond:</strong> The chemical bond formed between the carboxyl group of one amino acid and the amino group of another." },
            { q: "Which of the following is a component of nucleic acids?", o: ["Amino acid", "Fatty acid", "Phosphate group", "Glucose"], a: 2, e: "Nucleotides (monomers of nucleic acids) consist of a sugar, a nitrogenous base, and a phosphate group.", d: "<strong>Nucleic Acid:</strong> Biopolymers, essential for all known forms of life (DNA and RNA)." },
            { q: "Which of the following is a characteristic of vitamins?", o: ["They provide energy directly.", "They are essential for normal body function.", "They are inorganic molecules.", "They are a primary source of protein."], a: 1, e: "Vitamins are micronutrients needed in small quantities for metabolism. They don't provide energy directly.", d: "<strong>Vitamin:</strong> An organic molecule that is an essential micronutrient." },
            { q: "Which vitamin is important for vision and immune function and is fat-soluble?", o: ["Vitamin C", "Vitamin B12", "Vitamin A", "Vitamin K"], a: 2, e: "Vitamin A (Retinol) is crucial for vision and is fat-soluble (A, D, E, K are fat-soluble).", d: "<strong>Fat-soluble Vitamins:</strong> Vitamins that are soluble in fats and oils." },
            { q: "Which acid carries genetic information?", o: ["Amino acid", "Nucleic acid", "Sulphuric acid", "Ascorbic acid"], a: 1, e: "Deoxyribonucleic acid (DNA) and Ribonucleic acid (RNA).", d: "<strong>Genetics:</strong> The study of heredity and the variation of inherited characteristics." },
            { q: "Which vitamin helps the body absorb calcium and is fat-soluble?", o: ["Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin E"], a: 2, e: "Vitamin D promotes calcium absorption in the gut.", d: "<strong>Calcium Absorption:</strong> The process by which calcium is taken up by the body." },
            { q: "Which of the following is a primary function of lipids in the body?", o: ["Providing immediate energy", "Storing genetic information", "Long-term energy storage", "Catalyzing biochemical reactions"], a: 2, e: "Lipids (fats) store more energy per gram than carbohydrates and are used for long-term storage.", d: "<strong>Lipid:</strong> A macrobiomolecule that is soluble in nonpolar solvents." },
            { q: "How might a diet lacking in lipids affect the absorption of certain vitamins?", o: ["It would have no effect since vitamins are not related to lipids.", "It would increase absorption because lipids compete with vitamins for absorption.", "It would decrease the absorption of fat-soluble vitamins, such as A, D, E, and K.", "It would decrease the absorption of water-soluble vitamins, such as C and B."], a: 2, e: "These vitamins require dietary fat to be absorbed by the body.", d: "<strong>Malabsorption:</strong> A state arising from abnormality in absorption of food nutrients." },
            { q: "Which vitamin is essential for blood clotting?", o: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], a: 3, e: "Vitamin K is a cofactor for the synthesis of clotting factors.", d: "<strong>Coagulation:</strong> The process by which blood changes from a liquid to a gel, forming a blood clot." },
            { q: "Which biochemistry application is used to determine parentage?", o: ["Pregnancy test", "Genetic engineering", "Cancer screening", "Parental genetic testing"], a: 3, e: "DNA profiling compares specific DNA sequences to determine biological relationships.", d: "<strong>DNA Profiling:</strong> The process of determining an individual's DNA characteristics." }
        ]
    }
};

const chapterMetadata = {
    physics: {
        unit10: { icon: "🔥", title: "Unit 10", subtitle: "Heat Capacity" },
        unit11: { icon: "🌡️", title: "Unit 11", subtitle: "Thermal Trans." },
        unit12: { icon: "🌊", title: "Unit 12", subtitle: "Waves" },
        unit13: { icon: "🔊", title: "Unit 13", subtitle: "Sound" },
        unit14: { icon: "👁️", title: "Unit 14", subtitle: "Optics" },
        unit15: { icon: "⚡", title: "Unit 15", subtitle: "Electrostatics" },
        unit16: { icon: "🔋", title: "Unit 16", subtitle: "Current Elec." },
        unit17: { icon: "🔌", title: "Unit 17", subtitle: "Circuits" },
        unit18: { icon: "📟", title: "Unit 18", subtitle: "Electronics" },
        unit19: { icon: "🧲", title: "Unit 19", subtitle: "Electromag." },
        unit20: { icon: "📡", title: "Unit 20", subtitle: "EM Waves" },
        unit21: { icon: "☢️", title: "Unit 21", subtitle: "Nuclear Phy." }
    },
    computer: {
        unit1: { icon: "💻", title: "Unit 1", subtitle: "Computer Systems" },
        unit2: { icon: "🧠", title: "Unit 2", subtitle: "Comp. Thinking" },
        unit3: { icon: "⌨️", title: "Unit 3", subtitle: "Programming" },
        unit4: { icon: "📊", title: "Unit 4", subtitle: "Data & Analysis" },
        unit5: { icon: "🌐", title: "Unit 5", subtitle: "Applications" },
        unit6: { icon: "🌍", title: "Unit 6", subtitle: "Impacts" },
        unit7: { icon: "📱", title: "Unit 7", subtitle: "Digital Literacy" },
        unit8: { icon: "🚀", title: "Unit 8", subtitle: "Entrepreneurship" }
    },
    chemistry: {
        unit1: { icon: "📜", title: "Unit 1", subtitle: "History" },
        unit2: { icon: "🧊", title: "Unit 2", subtitle: "Matter" },
        unit3: { icon: "⚖️", title: "Unit 3", subtitle: "Stoichiometry" },
        unit4: { icon: "🔋", title: "Unit 4", subtitle: "Electrochem" },
        unit5: { icon: "⏱️", title: "Unit 5", subtitle: "Kinetics" },
        unit6: { icon: "🧂", title: "Unit 6", subtitle: "Salts" },
        unit7: { icon: "🏭", title: "Unit 7", subtitle: "Industrial" },
        unit8: { icon: "🌿", title: "Unit 8", subtitle: "Organic" },
        unit9: { icon: "⛽", title: "Unit 9", subtitle: "Hydrocarbons" },
        unit10: { icon: "🍷", title: "Unit 10", subtitle: "Hydroxy Comp." },
        unit11: { icon: "🍋", title: "Unit 11", subtitle: "Carboxylic" },
        unit12: { icon: "🔗", title: "Unit 12", subtitle: "Polymers" },
        unit13: { icon: "🧬", title: "Unit 13", subtitle: "Biochemistry" }
    }
};

// --- ANIMATION STYLES ---
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
@keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
.anim-fade-up { animation: fadeInUp 0.5s ease-out forwards; }
.anim-scale-in { animation: scaleIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
.anim-shake { animation: shake 0.4s ease-in-out; }
.anim-pulse { animation: pulse 0.3s ease-out; }
`;
document.head.appendChild(style);

// --- APP STATE ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let userProfile = { name: '' };
let selectedSubjectMode = '';
let selectedMode = '';
let selectedChapter = '';
let selectedMultiChapters = [];
let timerSettings = { mode: 'normal', duration: 0 }; // duration in seconds
let quizStartTime;
let quizTimerInterval;
let finalTimeStr = '00:00';
let currentStreak = 0;
let highestStreak = 0;
let isMultiSubjectMode = false;
let selectedMultiSubjects = [];
let multiSubjectSettings = {
    type: '', // 'count', 'all', 'specific'
    count: 0
};
let multiSubjectFilter = {}; // { physics: ['unit1', 'unit2'], ... }
let modalCallback = null; // Callback for modal confirmation

// --- DOM ELEMENTS ---
const introScreen = document.getElementById('intro-screen');
const regScreen = document.getElementById('reg-screen');
const menuScreen = document.getElementById('menu-screen');
const modeScreen = document.getElementById('mode-screen');
const chapterScreen = document.getElementById('chapter-screen');
const mixedSetupScreen = document.getElementById('mixed-setup-screen');
const multiChapterScreen = document.getElementById('multi-chapter-screen');
const timerScreen = document.getElementById('timer-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const multiSubSelectScreen = document.getElementById('multi-sub-select-screen');
const multiSubOptionsScreen = document.getElementById('multi-sub-options-screen');
const multiSubFilterScreen = document.getElementById('multi-sub-filter-screen');
const confirmationModal = document.getElementById('confirmation-modal');

const startBtn = document.getElementById('start-btn');
const proceedBtn = document.getElementById('proceed-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const progressBar = document.getElementById('progress-bar');
const questionCounter = document.getElementById('question-counter');
const subjectTag = document.getElementById('subject-tag');
const finalScore = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');
const reviewList = document.getElementById('review-list');
const totalQLabel = document.getElementById('total-q');
const resultUserName = document.getElementById('result-user-name');
const btnElective = document.getElementById('btn-elective');
const timerDisplay = document.getElementById('timer-display');
const resultTime = document.getElementById('result-time');
const startBattleBtn = document.getElementById('start-battle-btn');
const goalInputBox = document.getElementById('goal-input-box');
const goalMinutesInput = document.getElementById('goal-minutes');
const btnMixedChapter = document.getElementById('btn-mixed-chapter');
const mixedCountInput = document.getElementById('mixed-count-input');
const btnStartMixedCustom = document.getElementById('btn-start-mixed-custom');
const btnStartMultiChapter = document.getElementById('btn-start-multi-chapter');
const multiChapterGrid = document.getElementById('multi-chapter-grid');
const btnConfirmMulti = document.getElementById('btn-confirm-multi');
const btnStartMixedAll = document.getElementById('btn-start-mixed-all');
const btnRetryTest = document.getElementById('btn-retry-test');
const streakDisplay = document.getElementById('streak-display');
const resultStreak = document.getElementById('result-streak');
const btnMultiSubNext = document.getElementById('btn-multi-sub-next');
const btnMultiStartCount = document.getElementById('btn-multi-start-count');
const btnMultiSpecific = document.getElementById('btn-multi-specific');
const btnMultiPlayAll = document.getElementById('btn-multi-play-all');
const btnMultiBattleStart = document.getElementById('btn-multi-battle-start');
const btnModalYes = document.getElementById('btn-modal-yes');
const btnModalNo = document.getElementById('btn-modal-no');
const modalTitle = document.getElementById('modal-title');
const modalMsg = document.getElementById('modal-msg');

// --- EVENT LISTENERS ---
startBtn.addEventListener('click', () => {
    switchScreen(introScreen, regScreen);
});

proceedBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('reg-name');
    const errorMsg = document.getElementById('reg-error');

    if (!nameInput.value.trim()) {
        errorMsg.classList.add('visible');
        return;
    }

    userProfile.name = nameInput.value.trim();
    switchScreen(regScreen, menuScreen);
});

startBattleBtn.addEventListener('click', () => {
    const timerType = document.querySelector('input[name="timerType"]:checked').value;
    
    if (timerType === 'goal') {
        const mins = parseInt(goalMinutesInput.value);
        if (isNaN(mins) || mins <= 0 || mins > 100) {
            goalMinutesInput.style.borderColor = 'var(--danger)';
            return;
        }
        timerSettings.mode = 'goal';
        timerSettings.duration = mins * 60;
    } else {
        timerSettings.mode = 'normal';
        timerSettings.duration = 0;
    }
    
    initQuiz();
});

goalMinutesInput.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    if (val > 100) {
        e.target.style.borderColor = 'var(--danger)';
        startBattleBtn.disabled = true;
    } else {
        e.target.style.borderColor = 'var(--glass-border)';
        startBattleBtn.disabled = false;
    }
});

nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);

btnStartMixedCustom.addEventListener('click', () => startMixedQuiz('custom'));
btnStartMixedAll.addEventListener('click', () => startMixedQuiz('all'));

btnStartMultiChapter.addEventListener('click', () => {
    switchScreen(mixedSetupScreen, multiChapterScreen);
    renderMultiChapterSelection();
});

btnConfirmMulti.addEventListener('click', () => {
    if (selectedMultiChapters.length < 2) {
        alert("Please select at least 2 chapters.");
        return;
    }
    selectedChapter = 'multi';
    timerSettings.mixedCount = 0; // Use all questions from selected chapters
    switchScreen(multiChapterScreen, timerScreen);
});

btnMultiSubNext.addEventListener('click', () => {
    if (selectedMultiSubjects.length < 2) {
        alert("Please select at least 2 subjects.");
        return;
    }
    switchScreen(multiSubSelectScreen, multiSubOptionsScreen);
});

btnMultiStartCount.addEventListener('click', () => {
    const count = parseInt(document.getElementById('multi-count-input').value);
    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid number.");
        return;
    }
    multiSubjectSettings.type = 'count';
    multiSubjectSettings.count = count;
    showModal("Filter Chapters?", "Do you want to remove some chapters from the selection?", () => {
        renderMultiSubjectFilter(true); // true = start checked (remove mode)
        switchScreen(multiSubOptionsScreen, multiSubFilterScreen);
    }, () => prepareMultiSubjectQuiz(true));
});

btnMultiPlayAll.addEventListener('click', () => {
    multiSubjectSettings.type = 'all';
    showModal("Filter Chapters?", "Do you want to remove some chapters from the selection?", () => {
        renderMultiSubjectFilter(true); // true = start checked (remove mode)
        switchScreen(multiSubOptionsScreen, multiSubFilterScreen);
    }, () => prepareMultiSubjectQuiz(true));
});

btnMultiSpecific.addEventListener('click', () => {
    multiSubjectSettings.type = 'specific';
    // For specific, we go directly to filter screen, initially UNCHECKED or CHECKED?
    // "Specific" implies picking what you want. Let's show filter screen.
    renderMultiSubjectFilter(false); // false = start unchecked (or true? usually specific means pick a few. Let's start unchecked)
    // Actually, let's start unchecked so user picks.
    switchScreen(multiSubOptionsScreen, multiSubFilterScreen);
});

btnModalYes.addEventListener('click', () => {
    confirmationModal.classList.remove('active');
    if (modalCallback) modalCallback(true);
});

btnModalNo.addEventListener('click', () => {
    confirmationModal.classList.remove('active');
    if (modalCallback) modalCallback(false);
});

btnMultiBattleStart.addEventListener('click', () => {
    // Gather selected chapters from filter screen
    gatherMultiSubjectFilter();
    prepareMultiSubjectQuiz(false); // false = use filter
});

// --- FUNCTIONS ---
function switchScreen(from, to) {
    from.classList.add('hidden');
    from.classList.remove('active');
    setTimeout(() => {
        to.classList.remove('hidden');
        to.classList.add('active');
        to.classList.remove('anim-fade-up');
        void to.offsetWidth; // trigger reflow
        to.classList.add('anim-fade-up');
    }, 300);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// shuffle options and return new options + new answer index
function shuffleOptionsForQuestion(question) {
    const opts = question.o.map((text, i) => ({ text, origIndex: i }));
    const shuffled = shuffleArray(opts);
    const newAnswerIndex = shuffled.findIndex(item => item.origIndex === question.a);
    return {
        o: shuffled.map(s => s.text),
        a: newAnswerIndex
    };
}

function updateTimer() {
    if (selectedMode === 'practice') {
        if (timerDisplay) {
            timerDisplay.textContent = 'Practice';
        }
        return;
    }
    const now = Date.now();
    
    if (timerSettings.mode === 'normal') {
        const elapsed = Math.floor((now - quizStartTime) / 1000);
        const m = Math.floor(elapsed / 60).toString().padStart(2, '0');
        const s = (elapsed % 60).toString().padStart(2, '0');
        finalTimeStr = `${m}:${s}`;
    } else {
        // Goal mode: Countdown
        const elapsed = Math.floor((now - quizStartTime) / 1000);
        let remaining = timerSettings.duration - elapsed;
        
        if (remaining <= 0) {
            remaining = 0;
            finalTimeStr = "00:00";
            if (timerDisplay) timerDisplay.textContent = finalTimeStr;
            clearInterval(quizTimerInterval);
            showResult(true); // true indicates time up
            return;
        }
        
        const m = Math.floor(remaining / 60).toString().padStart(2, '0');
        const s = (remaining % 60).toString().padStart(2, '0');
        finalTimeStr = `${m}:${s}`;
    }
    
    if (timerDisplay) timerDisplay.textContent = finalTimeStr;
}

function selectSubject(mode) {
    if (mode === 'multi') {
        isMultiSubjectMode = true;
        renderMultiSubjectSelection();
        switchScreen(menuScreen, multiSubSelectScreen);
    } else {
        isMultiSubjectMode = false;
        selectedSubjectMode = mode;
        switchScreen(menuScreen, modeScreen);
    }
}

function selectMode(mode) {
    selectedMode = mode;
    renderChapterButtons();
    
    // Hide Mixed option in Practice mode
    if (selectedMode === 'practice') {
        const mixedBtn = document.getElementById('btn-mixed-chapter');
        if (mixedBtn) mixedBtn.style.display = 'none';
    } else {
        const mixedBtn = document.getElementById('btn-mixed-chapter');
        if (mixedBtn) mixedBtn.style.display = 'flex';
    }
    
    switchScreen(modeScreen, chapterScreen);
}

function renderChapterButtons() {
    const grid = document.querySelector('#chapter-screen .menu-grid');
    grid.innerHTML = '';

    // Mixed Button (Only for Test mode)
    const btnMixed = document.createElement('button');
    btnMixed.className = 'menu-card';
    btnMixed.id = 'btn-mixed-chapter';
    btnMixed.innerHTML = `<div class="icon-box">🔀</div><div class="card-text"><h3>Mixed</h3><p>All Chapters</p></div>`;
    btnMixed.onclick = () => selectChapter('mixed');
    grid.appendChild(btnMixed);

    // Chapter Buttons
    const subjectData = db[selectedSubjectMode];
    const subjectMeta = chapterMetadata[selectedSubjectMode] || {};
    if (subjectData) {
        Object.keys(subjectData).forEach(key => {
            const meta = subjectMeta[key] || { icon: "📘", title: key, subtitle: "Unit" };
            const btn = document.createElement('button');
            btn.className = 'menu-card';
            btn.innerHTML = `<div class="icon-box">${meta.icon}</div><div class="card-text"><h3>${meta.title}</h3><p>${meta.subtitle}</p></div>`;
            btn.onclick = () => selectChapter(key);
            grid.appendChild(btn);
        });
    }
}

function selectChapter(chapter) {
    selectedChapter = chapter;
    
    if (selectedMode === 'test' && chapter === 'mixed') {
        // Calculate total questions
        let total = 0;
        Object.values(db[selectedSubjectMode]).forEach(arr => total += arr.length);
        document.getElementById('total-mixed-count').textContent = total;
        switchScreen(chapterScreen, mixedSetupScreen);
    } else {
        if (selectedMode === 'practice') {
            initQuiz();
        } else {
            switchScreen(chapterScreen, timerScreen);
        }
    }
}

function startMixedQuiz(type) {
    let total = 0;
    Object.values(db[selectedSubjectMode]).forEach(arr => total += arr.length);
    
    if (type === 'custom') {
        const count = parseInt(mixedCountInput.value);
        if (isNaN(count) || count <= 0) {
            mixedCountInput.style.borderColor = 'var(--danger)';
            return;
        }
        if (count > total) {
            mixedCountInput.style.borderColor = 'var(--danger)';
            alert(`Only ${total} questions available!`);
            return;
        }
        timerSettings.mixedCount = count;
    } else {
        timerSettings.mixedCount = total;
    }
    switchScreen(mixedSetupScreen, timerScreen);
}

function renderMultiChapterSelection() {
    multiChapterGrid.innerHTML = '';
    selectedMultiChapters = [];
    const subjectMeta = chapterMetadata[selectedSubjectMode] || {};
    
    Object.keys(db[selectedSubjectMode]).forEach(key => {
        const meta = subjectMeta[key] || { icon: "📘", title: key, subtitle: "Unit" };
        const btn = document.createElement('button');
        btn.className = 'menu-card';
        btn.innerHTML = `
            <div class="icon-box">${meta.icon}</div>
            <div class="card-text"><h3>${meta.title}</h3><p>${meta.subtitle}</p></div>
        `;
        btn.onclick = () => {
            btn.classList.toggle('selected');
            if (selectedMultiChapters.includes(key)) {
                selectedMultiChapters = selectedMultiChapters.filter(k => k !== key);
            } else {
                selectedMultiChapters.push(key);
            }
        };
        multiChapterGrid.appendChild(btn);
    });
}

function renderMultiSubjectSelection() {
    const grid = document.getElementById('multi-sub-grid');
    grid.innerHTML = '';
    selectedMultiSubjects = [];
    
    const subjects = ['physics', 'computer', 'chemistry'];
    const icons = { physics: '⚛️', computer: '💻', chemistry: '🧪' };
    const titles = { physics: 'Physics', computer: 'Computer', chemistry: 'Chemistry' };
    
    subjects.forEach(sub => {
        const btn = document.createElement('button');
        btn.className = 'menu-card';
        btn.innerHTML = `
            <div class="icon-box">${icons[sub]}</div>
            <div class="card-text"><h3>${titles[sub]}</h3></div>
        `;
        btn.onclick = () => {
            btn.classList.toggle('selected');
            if (selectedMultiSubjects.includes(sub)) {
                selectedMultiSubjects = selectedMultiSubjects.filter(s => s !== sub);
            } else {
                selectedMultiSubjects.push(sub);
            }
        };
        grid.appendChild(btn);
    });
}

function showModal(title, msg, onYes, onNo = null) {
    modalTitle.textContent = title;
    modalMsg.textContent = msg;
    confirmationModal.classList.add('active');
    modalCallback = (result) => {
        if (result) {
            if (onYes) onYes();
        } else {
            if (onNo) onNo();
        }
    };
}

function renderMultiSubjectFilter(startChecked) {
    const container = document.getElementById('multi-filter-container');
    container.innerHTML = '';
    
    selectedMultiSubjects.forEach(subject => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'subject-group';
        groupDiv.innerHTML = `<h3>${subject.charAt(0).toUpperCase() + subject.slice(1)}</h3>`;
        
        const grid = document.createElement('div');
        grid.className = 'chapter-grid-compact';
        
        const subjectData = db[subject];
        const subjectMeta = chapterMetadata[subject] || {};
        
        Object.keys(subjectData).forEach(chapKey => {
            const meta = subjectMeta[chapKey] || { title: chapKey };
            const card = document.createElement('div');
            card.className = `chapter-checkbox-card ${startChecked ? 'checked' : ''}`;
            card.dataset.subject = subject;
            card.dataset.chapter = chapKey;
            card.innerHTML = `
                <div style="width:16px; height:16px; border:1px solid var(--text-muted); border-radius:3px; display:flex; align-items:center; justify-content:center; margin-right:5px;">
                    ${startChecked ? '✓' : ''}
                </div>
                <span>${meta.title}</span>
            `;
            
            card.onclick = () => {
                card.classList.toggle('checked');
                const checkMark = card.querySelector('div');
                checkMark.innerHTML = card.classList.contains('checked') ? '✓' : '';
            };
            
            grid.appendChild(card);
        });
        
        groupDiv.appendChild(grid);
        container.appendChild(groupDiv);
    });
}

function gatherMultiSubjectFilter() {
    multiSubjectFilter = {};
    selectedMultiSubjects.forEach(s => multiSubjectFilter[s] = []);
    
    const cards = document.querySelectorAll('.chapter-checkbox-card.checked');
    cards.forEach(card => {
        const s = card.dataset.subject;
        const c = card.dataset.chapter;
        if (multiSubjectFilter[s]) multiSubjectFilter[s].push(c);
    });
}

function prepareMultiSubjectQuiz(includeAll) {
    if (includeAll) {
        multiSubjectFilter = {};
        selectedMultiSubjects.forEach(s => {
            multiSubjectFilter[s] = Object.keys(db[s]);
        });
    }
    
    // Check if any chapters selected
    let totalChapters = 0;
    Object.values(multiSubjectFilter).forEach(arr => totalChapters += arr.length);
    
    if (totalChapters === 0) {
        alert("Please select at least one chapter!");
        return;
    }
    
    // Set mode to test implicitly for multi-subject battle
    selectedMode = 'test';
    timerSettings.mode = 'normal'; // Default to normal timer, or we could ask. Assuming normal for now.
    
    initQuiz();
}

function initQuiz(retryChapter = null) {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    currentQuestions = [];
    
    // Reset Streak
    currentStreak = 0;
    highestStreak = 0;
    if (streakDisplay) streakDisplay.classList.add('hidden');

    // Helper to deduplicate questions based on text
    const getUniqueQuestions = (questions) => {
        const seen = new Set();
        return questions.filter(q => {
            if (seen.has(q.q)) return false;
            seen.add(q.q);
            return true;
        });
    };

    // Determine source questions
    let rawList = [];
    let chapterName = "";

    if (retryChapter) selectedChapter = retryChapter;

    if (isMultiSubjectMode) {
        chapterName = "Multi-Subject Battle";
        
        // Gather questions per subject
        let subjectQuestions = {};
        selectedMultiSubjects.forEach(sub => {
            subjectQuestions[sub] = [];
            const allowedChapters = multiSubjectFilter[sub] || [];
            allowedChapters.forEach(chap => {
                if (db[sub][chap]) subjectQuestions[sub] = subjectQuestions[sub].concat(db[sub][chap]);
            });
            // Deduplicate within subject
            subjectQuestions[sub] = getUniqueQuestions(subjectQuestions[sub]);
        });

        if (multiSubjectSettings.type === 'count') {
            const totalReq = multiSubjectSettings.count;
            const numSubjects = selectedMultiSubjects.length;
            const targetPerSubject = Math.ceil(totalReq / numSubjects);
            
            selectedMultiSubjects.forEach(sub => {
                let pool = shuffleArray(deepCopy(subjectQuestions[sub]));
                // Take target amount, or all if not enough
                let take = Math.min(pool.length, targetPerSubject);
                rawList = rawList.concat(pool.slice(0, take));
            });
            
            // If we have more than requested (due to ceil), trim randomly
            if (rawList.length > totalReq) {
                rawList = shuffleArray(rawList).slice(0, totalReq);
            }
        } else {
            // Play All or Specific (All selected from filter)
            selectedMultiSubjects.forEach(sub => {
                rawList = rawList.concat(subjectQuestions[sub]);
            });
        }
        
    } else if (selectedChapter === 'mixed') {
        Object.values(db[selectedSubjectMode]).forEach(arr => rawList = rawList.concat(arr));
        chapterName = "Mixed Battle";
    } else if (selectedChapter === 'multi') {
        selectedMultiChapters.forEach(key => {
            if (db[selectedSubjectMode][key]) rawList = rawList.concat(db[selectedSubjectMode][key]);
        });
        chapterName = "Custom Battle";
    } else {
        rawList = db[selectedSubjectMode][selectedChapter] || [];
        chapterName = selectedChapter.replace('unit', 'Unit ');
    }

    if (selectedMode === 'test') {
        // TEST MODE: Randomize, No Repeats, Shuffle Options
        const uniqueList = getUniqueQuestions(rawList);
        let take = uniqueList.length;
        
        if (selectedChapter === 'mixed' && timerSettings.mixedCount > 0) {
            take = timerSettings.mixedCount || uniqueList.length;
        }
        
        const picked = shuffleArray(deepCopy(uniqueList)).slice(0, take);
        currentQuestions = picked.map(q => {
            const copy = deepCopy(q);
            const shuffled = shuffleOptionsForQuestion(copy);
            return {
                q: copy.q,
                o: shuffled.o,
                a: shuffled.a
            };
        });
    } else {
        // PRACTICE MODE: Exact Order, Exact Options, Correct Selected
        if (isMultiSubjectMode) {
             // Practice not really supported in this flow, but if we did, shuffle anyway for multi
             currentQuestions = shuffleArray(deepCopy(rawList));
        } else {
            currentQuestions = deepCopy(rawList); // No shuffle
        }
    }

    subjectTag.textContent = chapterName;

    // update total label in result screen
    totalQLabel.textContent = `/ ${currentQuestions.length}`;

    // Screen transition
    if (selectedMode === 'practice') {
        switchScreen(chapterScreen, quizScreen);
    } else if (isMultiSubjectMode) {
        if (!multiSubFilterScreen.classList.contains('hidden')) switchScreen(multiSubFilterScreen, quizScreen);
        else if (!multiSubOptionsScreen.classList.contains('hidden')) switchScreen(multiSubOptionsScreen, quizScreen);
        else switchScreen(multiSubSelectScreen, quizScreen); // Fallback
    } else {
        switchScreen(chapterScreen, quizScreen);
        switchScreen(timerScreen, quizScreen);
    }
    
    // Start Timer
    quizStartTime = Date.now();
    clearInterval(quizTimerInterval);
    if (selectedMode === 'test') {
        quizTimerInterval = setInterval(updateTimer, 1000);
    }
    updateTimer();

    renderQuestion();
}

function renderQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    if (!q) return;
    
    questionText.textContent = q.q;
    questionText.classList.remove('anim-fade-up');
    void questionText.offsetWidth;
    questionText.classList.add('anim-fade-up');
    questionCounter.textContent = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;
    
    optionsContainer.innerHTML = '';
    nextBtn.disabled = true;
    
    // Show/Hide Previous Button
    if (selectedMode === 'practice') {
        nextBtn.disabled = false;
        prevBtn.style.display = 'inline-block';
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.textContent = currentQuestionIndex === currentQuestions.length - 1 ? "Finish Practice" : "Next Question";
    } else {
        prevBtn.style.display = 'none';
        nextBtn.textContent = "Next Question";
    }

    // create option buttons (options already shuffled in currentQuestions)
    q.o.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        if (selectedMode === 'test') {
            btn.classList.add('anim-scale-in');
            btn.style.animationDelay = `${index * 0.1}s`;
            btn.style.opacity = '0';
        }
        btn.setAttribute('aria-label', `Option ${String.fromCharCode(65 + index)}: ${opt}`);
        btn.innerHTML = `${String.fromCharCode(65 + index)}) &nbsp; ${opt}`;
        
        if (selectedMode === 'practice') {
            btn.disabled = true; // Read only in practice? Or interactive? Prompt says "correct one already selected"
            if (index === q.a) {
                btn.classList.add('correct', 'selected');
            }
        } else {
            btn.onclick = () => selectOption(index, btn, q.a, q);
        }
        optionsContainer.appendChild(btn);
    });

    // NEW: Add Explanation for Practice Mode
    if (selectedMode === 'practice') {
        const explContainer = document.createElement('div');
        explContainer.className = 'explanation-container';
        
        // Explanation Toggle
        const explBtn = document.createElement('button');
        explBtn.className = 'toggle-btn';
        explBtn.innerHTML = 'Explanation <span class="arrow">▼</span>';
        explBtn.onclick = () => {
            const content = explBtn.nextElementSibling;
            content.classList.toggle('hidden');
            explBtn.querySelector('.arrow').style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        };
        
        const explContent = document.createElement('div');
        explContent.className = 'explanation-content hidden';
        explContent.innerHTML = `<p>${q.e || "Explanation coming soon."}</p>`;
        
        // Definitions Toggle inside Explanation
        if (q.d) {
            const defBtn = document.createElement('button');
            defBtn.className = 'toggle-btn sub-toggle';
            defBtn.innerHTML = 'Definitions <span class="arrow">▼</span>';
            defBtn.onclick = () => {
                const defContent = defBtn.nextElementSibling;
                defContent.classList.toggle('hidden');
                defBtn.querySelector('.arrow').style.transform = defContent.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
            };
            
            const defContent = document.createElement('div');
            defContent.className = 'definitions-content hidden';
            defContent.innerHTML = q.d;
            
            explContent.appendChild(document.createElement('hr'));
            explContent.appendChild(defBtn);
            explContent.appendChild(defContent);
        }

        explContainer.appendChild(explBtn);
        explContainer.appendChild(explContent);
        optionsContainer.appendChild(explContainer);
    }

    // focus first option for keyboard accessibility
    const first = optionsContainer.querySelector('.option-btn');
    if (first) first.focus();
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function selectOption(selectedIndex, btnElement, correctIndex, questionObj) {
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(b => {
        b.disabled = true;
        b.classList.add('disabled');
        b.style.opacity = '1';
    });

    const isCorrect = selectedIndex === correctIndex;

    btnElement.classList.add('selected');

    // Streak Logic (Test Mode Only)
    if (selectedMode === 'test') {
        if (isCorrect) {
            currentStreak++;
            if (currentStreak > highestStreak) highestStreak = currentStreak;
            
            if (currentStreak >= 2 && streakDisplay) {
                streakDisplay.textContent = `STREAK: ${currentStreak}`;
                streakDisplay.classList.remove('hidden');
                streakDisplay.classList.remove('anim-pulse');
                void streakDisplay.offsetWidth; // trigger reflow
                streakDisplay.classList.add('anim-pulse');
            }
        } else {
            currentStreak = 0;
            if (streakDisplay) streakDisplay.classList.add('hidden');
        }
    }

    if (isCorrect) {
        btnElement.classList.add('correct');
        btnElement.classList.add('anim-pulse');
        score++;
    } else {
        btnElement.classList.add('wrong');
        btnElement.classList.add('anim-shake');
        // mark correct button
        const correctBtn = buttons[correctIndex];
        if (correctBtn) {
            correctBtn.classList.add('correct');
            correctBtn.classList.add('anim-pulse');
        }
    }

    // store answers (strip leading "A) " using regex)
    const getText = (btn) => btn.textContent.replace(/^[A-Z]\)\s*/, '').trim();

    userAnswers.push({
        q: questionObj.q,
        selected: getText(btnElement),
        correct: getText(optionsContainer.querySelectorAll('.option-btn')[correctIndex]),
        isCorrect: isCorrect
    });

    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult(isTimeUp = false) {
    clearInterval(quizTimerInterval);
    switchScreen(quizScreen, resultScreen);

    resultUserName.textContent = `Cadet: ${userProfile.name}`;
    
    if (selectedMode === 'practice') {
        resultMessage.textContent = "Practice Completed! 📚";
        finalScore.textContent = "-";
        totalQLabel.textContent = "";
        if (resultTime) resultTime.textContent = "";
        
        // Show Test Button for this chapter
        btnRetryTest.style.display = 'flex';
        btnRetryTest.onclick = () => {
            selectedMode = 'test';
            switchScreen(resultScreen, timerScreen);
        };
        
        // Hide review list for practice as it's redundant
        reviewList.innerHTML = '<p style="color:var(--text-muted)">Good job reviewing the material!</p>';
        if (resultStreak) resultStreak.classList.add('hidden');
        return;
    }

    // Show Highest Streak in Test Mode
    if (resultStreak) {
        resultStreak.textContent = `Highest Streak: ${highestStreak} 🔥`;
        resultStreak.classList.remove('hidden');
    }

    btnRetryTest.style.display = 'none';
    const timeLabel = (timerSettings.mode === 'goal') ? 'Time Left' : 'Time Taken';
    if (resultTime) resultTime.textContent = `${timeLabel}: ${finalTimeStr}`;
    
    finalScore.textContent = 0;
    setTimeout(() => {
        let startScore = 0;
        const duration = 1000;
        const startTime = performance.now();
        function animateScore(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            finalScore.textContent = Math.floor(ease * score);
            if (progress < 1) requestAnimationFrame(animateScore);
            else finalScore.textContent = score;
        }
        requestAnimationFrame(animateScore);
    }, 300);
    
    const percentage = (score / currentQuestions.length) * 100;
    if (isTimeUp) resultMessage.textContent = "Time's Up! ⏰";
    else if (percentage >= 90) resultMessage.textContent = "Legendary! 🏆";
    else if (percentage >= 70) resultMessage.textContent = "Excellent Work! 🌟";
    else if (percentage >= 50) resultMessage.textContent = "Good Effort! 👍";
    else resultMessage.textContent = "Keep Practicing! 📚";

    // Update Circle visual stroke
    try {
        const circle = document.querySelector('.progress-ring__circle');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        const percent = Math.round((score / currentQuestions.length) * 100);
        const offset = circumference - (percent / 100) * circumference;
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 80);
    } catch (e) {
        // ignore if svg not found
    }
    
    reviewList.innerHTML = '';
    userAnswers.forEach((ans, i) => {
        const div = document.createElement('div');
        div.classList.add('review-item', ans.isCorrect ? 'correct' : 'wrong');
        div.innerHTML = `
            <span class="review-q">Q${i+1}: ${ans.q}</span>
            <span class="review-ans">Your Answer: ${ans.selected} ${ans.isCorrect ? '✅' : '❌'}</span>
            ${!ans.isCorrect ? `<span class="review-ans" style="color:var(--accent)">Correct Answer: ${ans.correct}</span>` : ''}
        `;
        reviewList.appendChild(div);
    });
}

function downloadPDF() {
    // Ensure jsPDF is available
    if (!window.jspdf) {
        alert("PDF generator not loaded yet.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Font setup
    doc.setFont("helvetica");

    // Title
    doc.setFontSize(20);
    doc.setTextColor(10, 25, 47);
    doc.text("MCQs Gala - Result", 105, 20, null, null, "center");

    // Metadata
    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50);
    doc.text(`Subject: ${subjectTag.textContent}`, 20, 35);
    doc.text(`Name: ${userProfile.name}`, 20, 42);
    const timeLabel = timerSettings.mode === 'goal' ? 'Time Left' : 'Time Taken';
    doc.text(`${timeLabel}: ${finalTimeStr}`, 150, 42);
    doc.text(`Score: ${score} / ${currentQuestions.length}`, 20, 49);
    if (selectedMode === 'test') doc.text(`Highest Streak: ${highestStreak}`, 150, 49);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, 35);

    doc.setLineWidth(0.5);
    doc.line(20, 55, 190, 55);

    let y = 65;

    userAnswers.forEach((ans, index) => {
        if (y > 270) {
            doc.addPage();
            y = 20;
        }

        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        
        const splitTitle = doc.splitTextToSize(`Q${index + 1}: ${ans.q}`, 170);
        doc.text(splitTitle, 20, y);
        y += (splitTitle.length * 6);

        doc.setFontSize(10);
        if (ans.isCorrect) {
            doc.setTextColor(0, 100, 0);
            doc.text(`Your Answer: ${ans.selected} (Correct)`, 20, y);
        } else {
            doc.setTextColor(200, 0, 0);
            doc.text(`Your Answer: ${ans.selected} (Wrong)`, 20, y);
            y += 5;
            doc.setTextColor(0, 100, 0);
            doc.text(`Correct Answer: ${ans.correct}`, 20, y);
        }

        y += 12;
    });

    doc.save("MCQs_Gala_Result.pdf");
}

function toggleTimerInput() {
    const type = document.querySelector('input[name="timerType"]:checked').value;
    if (type === 'goal') {
        goalInputBox.classList.add('active');
    } else {
        goalInputBox.classList.remove('active');
    }
}

// --- Keyboard Support ---
document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (!quizScreen.classList.contains('hidden')) {
        const buttons = [...optionsContainer.querySelectorAll('.option-btn')];
        const enabledButtons = buttons.filter(b => !b.disabled);
        if (enabledButtons.length) {
            if (key === 'a' && buttons[0]) buttons[0].click();
            if (key === 'b' && buttons[1]) buttons[1].click();
            if (key === 'c' && buttons[2]) buttons[2].click();
            if (key === 'd' && buttons[3]) buttons[3].click();
        } else {
            if (key === 'enter' && !nextBtn.disabled) nextBtn.click();
        }
    }
});

// --- Navigation & Controls ---
function handleBack(currentScreen) {
    switch(currentScreen) {
        case 'reg': switchScreen(regScreen, introScreen); break;
        case 'menu': switchScreen(menuScreen, regScreen); break;
        case 'mode': switchScreen(modeScreen, menuScreen); break;
        case 'chapter': switchScreen(chapterScreen, modeScreen); break;
        case 'mixed-setup': switchScreen(mixedSetupScreen, chapterScreen); break;
        case 'multi-chapter': switchScreen(multiChapterScreen, mixedSetupScreen); break;
        case 'multi-sub-select': switchScreen(multiSubSelectScreen, menuScreen); break;
        case 'multi-sub-options': switchScreen(multiSubOptionsScreen, multiSubSelectScreen); break;
        case 'multi-sub-filter': switchScreen(multiSubFilterScreen, multiSubOptionsScreen); break;
        case 'result': switchScreen(resultScreen, menuScreen); break;
        case 'timer':
            if (selectedChapter === 'mixed') switchScreen(timerScreen, mixedSetupScreen);
            else if (selectedChapter === 'multi') switchScreen(timerScreen, multiChapterScreen);
            else switchScreen(timerScreen, chapterScreen);
            break;
    }
}

function confirmAction(action) {
    if (action === 'restart') {
        showModal(
            "Restart Battle?", 
            "Are you sure you want to restart? Current progress will be lost.", 
            () => {
                // Restart logic
                if (selectedMode === 'test') clearInterval(quizTimerInterval);
                initQuiz();
            }
        );
    } else if (action === 'quit') {
        showModal(
            "Quit Battle?", 
            "Are you sure you want to quit? You will return to subject selection.", 
            () => {
                // Quit logic
                if (selectedMode === 'test') clearInterval(quizTimerInterval);
                // Reset streak display if quitting
                if (streakDisplay) streakDisplay.classList.add('hidden');
                currentStreak = 0;
                switchScreen(quizScreen, menuScreen);
            }
        );
    }
}
