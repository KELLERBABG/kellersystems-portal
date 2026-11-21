const TIERS = [
    {
        "id": "COMM",
        "label": "Commercial",
        "sub": "Platforms built for commercial use and pilots"
    },
    {
        "id": "OS",
        "label": "Open Source",
        "sub": "Public codebases anyone can inspect, verify, or run"
    },
    {
        "id": "PoC",
        "label": "Proof of Concept",
        "sub": "Active builds moving from idea to working prototype"
    },
    {
        "id": "PoK",
        "label": "Proof of Knowledge",
        "sub": "Reference kernels, simulations, and deep technical studies"
    },
    {
        "id": "ARCHIVE",
        "label": "Archive",
        "sub": "Older explorations kept on the record",
        "collapsed": true
    }
];

const REPOSITORIES = [
    /* --- COMM (6) --- */
    {
        "name": "BauLens",
        "raw_name": "BauLens",
        "tier": "COMM",
        "domain": "Building Codes",
        "language": "JavaScript",
        "description": "Checks a building plan against German, Austrian, and Swiss building codes before construction starts.",
        "url": "https://lens.kellersystems.dev",
        "updated": "2026-09-06T17:23:33Z"
    },
    {
        "name": "ClauseLens",
        "raw_name": "ClauseLens",
        "tier": "COMM",
        "domain": "Contracts",
        "language": "JavaScript",
        "description": "Scans contracts offline for auto-renewal traps, one-sided liability clauses, and contradictions, then suggests cleaner wording.",
        "url": "https://clause.kellersystems.dev",
        "updated": "2026-09-06T17:23:42Z"
    },
    {
        "name": "Ambient Thermal Arbitrage",
        "raw_name": "Ambient-Thermal-Arbitrage",
        "tier": "COMM",
        "domain": "Energy",
        "language": "Rust",
        "description": "Uses the heating and cooling inertia of industrial buildings as a virtual battery to shift power use to cheaper hours.",
        "url": "https://ambient.kellersystems.dev",
        "updated": "2026-09-06T17:58:59Z"
    },
    {
        "name": "HoloForge",
        "raw_name": "HoloForge",
        "tier": "COMM",
        "domain": "3D Printing",
        "language": "Python",
        "description": "Projects light from multiple angles into resin to cure a whole 3D-printed part at once, with a full laptop optical simulator.",
        "url": "https://holoforge.kellersystems.dev",
        "updated": "2026-09-06T17:23:36Z"
    },
    {
        "name": "Aureal Watermark",
        "raw_name": "Aureal-Watermark",
        "tier": "COMM",
        "domain": "Audio DSP",
        "language": "HTML",
        "description": "Hides a subtle 32-bit ID inside audio tracks so you can trace ownership or recover provenance after edits and compression.",
        "url": "https://aureal.kellersystems.dev",
        "updated": "2026-09-06T08:27:40Z"
    },
    {
        "name": "TerraFlux",
        "raw_name": "TerraFlux",
        "tier": "COMM",
        "domain": "Irrigation",
        "language": "Python",
        "description": "Combines cheap soil moisture probes with weather forecasts and sends farmers one daily Telegram note on when and how long to irrigate.",
        "url": "https://terra.kellersystems.dev",
        "updated": "2026-08-25T08:12:54Z"
    },

    /* --- OS (11) --- */
    {
        "name": "Vantablack",
        "raw_name": "Vantablack",
        "tier": "OS",
        "domain": "Networking",
        "language": "Rust",
        "description": "Splits encrypted traffic into three shards across separate paths with post-quantum crypto so no relay or VPN sees the whole message.",
        "url": "https://vantablack.kellersystems.dev",
        "github_url": "https://github.com/KELLERBABG/Vantablack",
        "updated": "2026-10-05T00:00:00Z"
    },
    {
        "name": "ABOS",
        "raw_name": "ABOS",
        "tier": "OS",
        "domain": "Radio / SDR",
        "language": "Rust",
        "description": "Software-defined radio fallback that bounces messages off the ionosphere when normal internet is not available.",
        "url": "https://abos.kellersystems.dev",
        "github_url": "https://github.com/KELLERBABG/ABOS",
        "updated": "2026-09-26T19:28:48Z"
    },
    {
        "name": "AmtFlow",
        "raw_name": "AmtFlow",
        "tier": "OS",
        "domain": "Civic Tool",
        "language": "JavaScript",
        "description": "Local assistant for German official letters — spots deadlines, translates bureaucracy into plain language, and drafts formal replies.",
        "url": "https://amt.kellersystems.dev",
        "github_url": "https://github.com/KELLERBABG/AmtFlow",
        "updated": "2026-09-06T17:23:49Z"
    },
    {
        "name": "Differential Privacy Synthesizer",
        "raw_name": "Differential-Privacy-Synthesizer",
        "tier": "OS",
        "domain": "Privacy",
        "language": "Python",
        "description": "Generates synthetic datasets that keep real statistical patterns while mathematically capping what anyone can learn about an individual.",
        "url": "https://dps.kellersystems.dev",
        "github_url": "https://github.com/KELLERBABG/Differential-Privacy-Synthesizer",
        "updated": "2026-09-06T17:59:01Z"
    },
    {
        "name": "Formal Verification",
        "raw_name": "Formal-Verification",
        "tier": "OS",
        "domain": "Verification",
        "language": "Rust",
        "description": "Compile-time prover using Z3 that checks Rust code for memory, math, and logic bugs, with optional C, SQL, Lua, and Bash modules.",
        "url": "https://veritas.kellersystems.dev",
        "github_url": "https://github.com/KELLERBABG/Formal-Verification",
        "updated": "2026-08-25T08:17:23Z"
    },
    {
        "name": "KELLER-OS",
        "raw_name": "KELLER-OS",
        "tier": "OS",
        "domain": "Microkernel",
        "language": "Rust",
        "description": "Bare-metal microkernel and hypervisor written from scratch for isolated, anti-forensic, post-quantum environments.",
        "url": "https://kernel.kellersystems.dev",
        "github_url": "https://github.com/KELLERBABG/KELLER-OS",
        "updated": "2026-09-06T17:23:39Z"
    },
    {
        "name": "MuonScope Tomography",
        "raw_name": "MuonScope-Tomography",
        "tier": "OS",
        "domain": "Physics / Sensing",
        "language": "Python",
        "description": "Simulates and reconstructs 3D scans from cosmic-ray muons — and shows why backpack-sized muon scanners hit a physics wall.",
        "url": "https://muon.kellersystems.dev",
        "github_url": "https://github.com/KELLERBABG/MuonScope-Tomography",
        "updated": "2026-09-06T17:23:32Z"
    },
    {
        "name": "PacePulse",
        "raw_name": "PacePulse",
        "tier": "OS",
        "domain": "Verification",
        "language": "Python",
        "description": "Research verifier that checks pacemaker pacing logic with Z3 to rule out unsafe states (verification tooling, not a medical device).",
        "url": "https://pulse.kellersystems.dev",
        "github_url": "https://github.com/KELLERBABG/PacePulse",
        "updated": "2026-08-25T08:14:23Z"
    },
    {
        "name": "Quantum Entanglement Link",
        "raw_name": "QEL",
        "tier": "OS",
        "domain": "Quantum Net",
        "language": "Python",
        "description": "Simulates a full quantum network stack, from noisy qubits and error correction up to QKD and repeater routing.",
        "url": "https://kellerbabg.github.io/QEL/",
        "github_url": "https://github.com/KELLERBABG/QEL",
        "updated": "2026-10-05T00:00:00Z"
    },
    {
        "name": "SymEx EVM",
        "raw_name": "SymEx-EVM",
        "tier": "OS",
        "domain": "Smart Contracts",
        "language": "Rust",
        "description": "Runs Ethereum smart-contract bytecode symbolically with Z3 to surface vulnerabilities and concrete counter-examples.",
        "url": "https://axiom.kellersystems.dev",
        "github_url": "https://github.com/KELLERBABG/SymEx-EVM",
        "updated": "2026-09-06T17:23:49Z"
    },
    {
        "name": "TransitOS",
        "raw_name": "TransitOS",
        "tier": "OS",
        "domain": "Autonomy Safety",
        "language": "Rust",
        "description": "Formally verified safety gate between self-driving software and vehicle controls that blocks any command it cannot prove safe.",
        "url": "https://transit.kellersystems.dev",
        "github_url": "https://github.com/KELLERBABG/TransitOS",
        "updated": "2026-08-25T08:32:26Z"
    },

    /* --- PoC (2) --- */
    {
        "name": "AeroResonance",
        "raw_name": "AeroResonance",
        "tier": "PoC",
        "domain": "Energy Harvesting",
        "language": "Rust",
        "description": "Tests whether atmospheric radio and acoustic resonance can harvest usable power, with a buildable hardware prototype and honest power math.",
        "url": "https://resonance.kellersystems.dev",
        "github_url": "https://github.com/KELLERBABG/AeroResonance",
        "updated": "2026-09-06T00:00:00Z"
    },
    {
        "name": "AeroDose",
        "raw_name": "AeroDose",
        "tier": "PoC",
        "domain": "Worker Safety",
        "language": "Rust",
        "description": "Clip-on PM2.5 smoke tracker for outdoor crews that warns when a shift hits safe exposure limits and logs the dose.",
        "url": "https://aero.kellersystems.dev",
        "github_url": "https://github.com/KELLERBABG/AeroDose",
        "updated": "2026-09-06T17:23:52Z"
    },

    /* --- PoK (6) --- */
    {
        "name": "MycoSwarm",
        "raw_name": "MycoSwarm",
        "tier": "PoK",
        "domain": "Distributed Compute",
        "language": "TypeScript",
        "description": "Connects web browsers peer-to-peer to split up and verify WebAssembly compute tasks like a fungal network.",
        "url": "https://bio.kellersystems.dev",
        "updated": "2026-09-06T17:23:51Z"
    },
    {
        "name": "OP-Roboter",
        "raw_name": "OP-Roboter",
        "tier": "PoK",
        "domain": "Robotics",
        "language": "Rust",
        "description": "Real-time kinematics safety kernel that keeps surgical teleoperation robot arms inside safe motion bounds.",
        "url": "https://kinematics.kellersystems.dev",
        "updated": "2026-09-06T17:23:37Z"
    },
    {
        "name": "PlaneOS",
        "raw_name": "PlaneOS",
        "tier": "PoK",
        "domain": "Flight Control",
        "language": "Rust",
        "description": "Research prototype for formally verified flight-control logic and envelope protection (not certified avionics).",
        "url": "https://plane.kellersystems.dev",
        "updated": "2026-08-25T08:14:46Z"
    },
    {
        "name": "Planetary Entropy Mining",
        "raw_name": "Planetary-Entropy-Mining",
        "tier": "PoK",
        "domain": "Zero-Knowledge",
        "language": "Python",
        "description": "Turns measured physical noise into tamper-proof randomness certificates with a zero-knowledge proof hiding the sensor location.",
        "url": "https://pem.kellersystems.dev",
        "updated": "2026-09-06T17:59:03Z"
    },
    {
        "name": "SMPC Dark Pool",
        "raw_name": "SMPC-Dark-Pool",
        "tier": "PoK",
        "domain": "Cryptography",
        "language": "Rust",
        "description": "Matches split trade orders across nodes with threshold cryptography so nobody sees the order book or can front-run trades.",
        "url": "https://enclave.kellersystems.dev",
        "updated": "2026-09-06T17:59:03Z"
    },
    {
        "name": "Zero Knowledge Genome",
        "raw_name": "Zero-Knowledge-Genome",
        "tier": "PoK",
        "domain": "Bio-Privacy",
        "language": "Rust",
        "description": "Lets someone prove a genetic trait or sequence match cryptographically without sharing their raw DNA.",
        "url": "https://zkg.kellersystems.dev",
        "updated": "2026-09-06T17:59:03Z"
    },

    /* --- ARCHIVE (10) --- */
    {
        "name": "Algorithmic Supply Chain Arbitrage",
        "raw_name": "Algorithmic-Supply-Chain-Arbitrage",
        "tier": "ARCHIVE",
        "domain": "Logistics",
        "language": "Rust",
        "description": "Optimizes freight routing across shipping lanes using graph search and private price discovery.",
        "url": "https://supply.kellersystems.dev",
        "updated": "2026-09-06T17:58:58Z"
    },
    {
        "name": "AquaMOF",
        "raw_name": "AquaMOF",
        "tier": "ARCHIVE",
        "domain": "Water",
        "language": "Rust",
        "description": "Passive solar panel concept coated in MOF-303 that pulls about a liter of drinking water a day out of dry desert air without electricity.",
        "url": "https://aquamof.kellersystems.dev",
        "updated": "2026-09-06T17:23:48Z"
    },
    {
        "name": "AutoPoD",
        "raw_name": "AutoPoD",
        "tier": "ARCHIVE",
        "domain": "Telemetry",
        "language": "Rust",
        "description": "Reconstructs vehicle crash physics from 10 kHz IMU sensors and seals the evidence in a tamper-proof Merkle log for claims.",
        "url": "https://pod.kellersystems.dev",
        "updated": "2026-08-25T08:13:41Z"
    },
    {
        "name": "CityOS",
        "raw_name": "CityOS",
        "tier": "ARCHIVE",
        "domain": "Civic Systems",
        "language": "Rust",
        "description": "Local civic services and edge-computing layer built to run on top of the KELLER-OS microkernel.",
        "url": "https://city.kellersystems.dev",
        "updated": "2026-09-06T17:23:43Z"
    },
    {
        "name": "Decentralized Sovereign Credit Mesh",
        "raw_name": "Decentralized-Sovereign-Credit-Mesh",
        "tier": "ARCHIVE",
        "domain": "Credit",
        "language": "Rust",
        "description": "Peer-to-peer credit clearing and risk settlement backed by zero-knowledge proofs and trust networks.",
        "url": "https://credit.kellersystems.dev",
        "updated": "2026-09-06T17:59:02Z"
    },
    {
        "name": "FluidIP",
        "raw_name": "FluidIP",
        "tier": "ARCHIVE",
        "domain": "IP / Patents",
        "language": "Rust",
        "description": "Protocol for tracking, licensing, and routing modular intellectual property and patent rights.",
        "url": "https://patent.kellersystems.dev",
        "updated": "2026-09-06T17:23:34Z"
    },
    {
        "name": "Homomorphic Database",
        "raw_name": "Homomorphic-Database",
        "tier": "ARCHIVE",
        "domain": "Encryption",
        "language": "Rust",
        "description": "Runs database aggregations and neural inference straight on encrypted data without decrypting it first.",
        "url": "https://fhe.kellersystems.dev",
        "updated": "2026-09-06T17:59:04Z"
    },
    {
        "name": "Smart Matter",
        "raw_name": "Smart-Matter",
        "tier": "ARCHIVE",
        "domain": "Hardware",
        "language": "Rust",
        "description": "Research codebase for infrastructure-embedded sensors and programmable metamaterials.",
        "url": "https://smart-matter.kellersystems.dev",
        "updated": "2026-08-16T12:17:17Z"
    },
    {
        "name": "SybilGuard",
        "raw_name": "SybilGuard",
        "tier": "ARCHIVE",
        "domain": "Identity",
        "language": "Rust",
        "description": "Zero-knowledge proof-of-personhood protocol that verifies unique humans without a central biometric database.",
        "url": "https://citadel.kellersystems.dev",
        "updated": "2026-09-06T17:23:50Z"
    },
    {
        "name": "TradeShield",
        "raw_name": "TradeShield",
        "tier": "ARCHIVE",
        "domain": "Microplastics",
        "language": "TypeScript",
        "description": "Retrofits commercial laundries with 20-micron microfiber filters, weighs what is caught, and issues verifiable removal credits.",
        "url": "https://trade.kellersystems.dev",
        "updated": "2026-08-25T08:13:17Z"
    }
];
