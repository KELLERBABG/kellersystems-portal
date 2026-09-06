const REPOSITORIES = [
    {
        "name":  "AeroDose",
        "description":  "Occupational wildfire PM2.5 shift dose and compliance ledger",
        "url":  "https://aero.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/AeroDose",
        "language":  "Rust",
        "category":  "OS",
        "updated":  "2026-08-25T08:14:32Z"
    },
    {
        "name":  "AeroResonance",
        "description":  "Atmospheric electromagnetic and acoustic resonance energy harvester",
        "url":  "https://ehar.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/AeroResonance",
        "language":  "Rust",
        "category":  "Rust",
        "updated":  "2026-08-25T08:30:43Z"
    },
    {
        "name":  "AMOS",
        "description":  "Core engineering codebase and high-assurance research module.",
        "url":  "https://amos.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/AMOS",
        "language":  "Python",
        "category":  "OS",
        "updated":  "2026-08-25T08:13:32Z"
    },
    {
        "name":  "AmtFlow",
        "description":  "Kostenloser, lokaler Assistent fuer deutsche Behoerdenbriefe mit OCR-Texterkennung, Fristberechnung, 20 Sprachen und DIN 5008 Antwortschreiben.",
        "url":  "https://amt.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/AmtFlow",
        "language":  "HTML",
        "category":  "General",
        "updated":  "2026-08-31T11:59:09Z"
    },
    {
        "name":  "AquaMOF",
        "description":  "Passive atmospheric water harvester using MOF-303 isotherm thermodynamics",
        "url":  "https://aquamof.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/AquaMOF",
        "language":  "Rust",
        "category":  "Rust",
        "updated":  "2026-08-25T08:12:25Z"
    },
    {
        "name":  "ASCA",
        "description":  "Algorithmic Supply Chain Arbitrage and multi-modal logistics matching engine",
        "url":  "https://github.com/KELLERBABG/ASCA",
        "github_url":  "https://github.com/KELLERBABG/ASCA",
        "language":  "Rust",
        "category":  "Rust",
        "updated":  "2026-08-25T08:13:04Z"
    },
    {
        "name":  "ATA",
        "description":  "Core engineering codebase and high-assurance research module.",
        "url":  "https://ambient.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/ATA",
        "language":  "Rust",
        "category":  "Rust",
        "updated":  "2026-08-25T08:17:18Z"
    },
    {
        "name":  "AtmoOS",
        "description":  "Atmospheric Broadcast Operating System and resilient node mesh",
        "url":  "https://atmo.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/AtmoOS",
        "language":  "Rust",
        "category":  "OS",
        "updated":  "2026-08-25T08:15:19Z"
    },
    {
        "name":  "Aureal-Watermark",
        "description":  "Audio watermarking for anti-theft and AI detection",
        "url":  "https://aureal.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/Aureal-Watermark",
        "language":  "HTML",
        "category":  "General",
        "updated":  "2026-09-06T08:27:40Z"
    },
    {
        "name":  "AutoPoD",
        "description":  "Autonomous Proof-of-Damage layer with cryptographic incident audit",
        "url":  "https://pod.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/AutoPoD",
        "language":  "Rust",
        "category":  "Rust",
        "updated":  "2026-08-25T08:13:41Z"
    },
    {
        "name":  "BauLens",
        "description":  "Deterministic German and EU building code compliance validation engine",
        "url":  "https://lens.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/BauLens",
        "language":  "JavaScript",
        "category":  "General",
        "updated":  "2026-08-25T08:13:19Z"
    },
    {
        "name":  "CityOS",
        "description":  "Decentralized civic infrastructure and urban resource routing engine",
        "url":  "https://city.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/CityOS",
        "language":  "Rust",
        "category":  "OS",
        "updated":  "2026-08-25T08:32:17Z"
    },
    {
        "name":  "CosmicEntropy",
        "description":  "True random physical entropy mining and cryptographic beacon",
        "url":  "https://pem.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/CosmicEntropy",
        "language":  "Python",
        "category":  "Crypto",
        "updated":  "2026-08-25T08:18:25Z"
    },
    {
        "name":  "DPSynth",
        "description":  "Core engineering codebase and high-assurance research module.",
        "url":  "https://dps.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/DPSynth",
        "language":  "Python",
        "category":  "General",
        "updated":  "2026-08-25T08:13:17Z"
    },
    {
        "name":  "DSCM",
        "description":  "Core engineering codebase and high-assurance research module.",
        "url":  "https://credit.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/DSCM",
        "language":  "Rust",
        "category":  "Rust",
        "updated":  "2026-08-16T12:17:19Z"
    },
    {
        "name":  "FHE-DB",
        "description":  "Homomorphic encrypted relational database and neural inference engine",
        "url":  "https://fhe.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/FHE-DB",
        "language":  "Rust",
        "category":  "Crypto",
        "updated":  "2026-08-25T08:33:45Z"
    },
    {
        "name":  "FluidIP",
        "description":  "Decoupled Fluid IP routing protocol and packet mesh",
        "url":  "https://patent.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/FluidIP",
        "language":  "Rust",
        "category":  "Rust",
        "updated":  "2026-08-25T08:13:39Z"
    },
    {
        "name":  "Formal-Verification",
        "description":  "Formal methods and mathematically verified software safety suites",
        "url":  "https://github.com/KELLERBABG/Formal-Verification",
        "github_url":  "https://github.com/KELLERBABG/Formal-Verification",
        "language":  "Rust",
        "category":  "Rust",
        "updated":  "2026-08-25T08:17:23Z"
    },
    {
        "name":  "Formal-Verification-System",
        "description":  "High-assurance formal verification pipeline and proof assistant",
        "url":  "https://github.com/KELLERBABG/Formal-Verification-System",
        "github_url":  "https://github.com/KELLERBABG/Formal-Verification-System",
        "language":  "Rust",
        "category":  "Rust",
        "updated":  "2026-05-29T16:00:43Z"
    },
    {
        "name":  "GGN",
        "description":  "Global Ghost Net distributed WAN routing and telemetry node",
        "url":  "https://ggn.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/GGN",
        "language":  "Rust",
        "category":  "General",
        "updated":  "2026-08-16T11:35:11Z"
    },
    {
        "name":  "Global-Ghost-Net",
        "description":  ":black_heart: Post-quantum decentralized WAN mesh network with erasure-sharded onion routing (Vantablack)",
        "url":  "https://ggn.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/Global-Ghost-Net",
        "language":  "Rust",
        "category":  "Crypto",
        "updated":  "2026-09-06T08:36:35Z"
    },
    {
        "name":  "HoloForge",
        "description":  "Volumetric 3D light-field neural rendering pipeline",
        "url":  "https://holoforge.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/HoloForge",
        "language":  "Python",
        "category":  "General",
        "updated":  "2026-08-25T08:14:53Z"
    },
    {
        "name":  "KELLER-OS",
        "description":  "Microkernel operating system architecture written in pure Rust",
        "url":  "https://kernel.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/KELLER-OS",
        "language":  "Rust",
        "category":  "OS",
        "updated":  "2026-05-21T11:02:03Z"
    },
    {
        "name":  "LexiClear",
        "description":  "Automated contract clause contradiction and risk scoring engine",
        "url":  "https://clause.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/LexiClear",
        "language":  "JavaScript",
        "category":  "General",
        "updated":  "2026-08-25T08:17:03Z"
    },
    {
        "name":  "MuonScope",
        "description":  "Cosmic ray muon scattering tomography and 3D PoCA reconstruction pipeline",
        "url":  "https://muon.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/MuonScope",
        "language":  "Jupyter Notebook",
        "category":  "General",
        "updated":  "2026-08-25T08:30:51Z"
    },
    {
        "name":  "MuonScope-Engine",
        "description":  "MuonScope tomography core reconstruction wheel and data processing library",
        "url":  "https://tomography.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/MuonScope-Engine",
        "language":  "TypeScript",
        "category":  "General",
        "updated":  "2026-09-01T11:52:33Z"
    },
    {
        "name":  "MuonScope-Tomography",
        "description":  "MuonScope™: Cosmic-Ray Muon Scattering Tomography Digital Twin, 3D Inversion Engine \u0026 Silicon FPGA Architecture",
        "url":  "https://muon.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/MuonScope-Tomography",
        "language":  "Python",
        "category":  "General",
        "updated":  "2026-08-31T12:00:21Z"
    },
    {
        "name":  "MycoSwarm",
        "description":  "Mycelium biological network computation and bio-routing simulator",
        "url":  "https://bio.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/MycoSwarm",
        "language":  "TypeScript",
        "category":  "OS",
        "updated":  "2026-08-25T08:33:14Z"
    },
    {
        "name":  "OP-Roboter",
        "description":  "Robotic surgical teleoperation and real-time kinematic safety kernel",
        "url":  "https://kinematics.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/OP-Roboter",
        "language":  "Rust",
        "category":  "OS",
        "updated":  "2026-08-25T08:14:06Z"
    },
    {
        "name":  "PacePulse",
        "description":  "Zero-latency medical telemetry and cardiac rhythm monitoring platform",
        "url":  "https://pulse.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/PacePulse",
        "language":  "Python",
        "category":  "General",
        "updated":  "2026-08-25T08:14:23Z"
    },
    {
        "name":  "PlaneOS",
        "description":  "Avionics real-time operating system and flight envelope safety supervisor",
        "url":  "https://plane.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/PlaneOS",
        "language":  "Rust",
        "category":  "OS",
        "updated":  "2026-08-25T08:14:46Z"
    },
    {
        "name":  "Smart-Matter",
        "description":  "Programmable responsive matter and low-level physical compute simulation",
        "url":  "https://smart-matter.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/Smart-Matter",
        "language":  "Rust",
        "category":  "Rust",
        "updated":  "2026-08-16T12:17:17Z"
    },
    {
        "name":  "SMPC-DP",
        "description":  "Secure Multi-Party Computation with Differential Privacy engine",
        "url":  "https://enclave.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/SMPC-DP",
        "language":  "Rust",
        "category":  "Crypto",
        "updated":  "2026-08-25T08:13:28Z"
    },
    {
        "name":  "Sovereign-Core",
        "description":  "Sovereign cryptographic identity and state verification core",
        "url":  "https://sovereign.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/Sovereign-Core",
        "language":  "Rust",
        "category":  "Rust",
        "updated":  "2026-08-25T08:18:24Z"
    },
    {
        "name":  "SybilGuard",
        "description":  "Zero-knowledge Sybil-resistant Proof-of-Personhood biometric protocol",
        "url":  "https://citadel.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/SybilGuard",
        "language":  "Rust",
        "category":  "Crypto",
        "updated":  "2026-08-25T08:30:29Z"
    },
    {
        "name":  "SymEx-EVM",
        "description":  "Symbolic execution engine for EVM bytecode vulnerability detection and SMT verification",
        "url":  "https://axiom.kellersystems.dev",
        "github_url":  "https://github.com/KELLERBABG/SymEx-EVM",
        "language":  "Rust",
        "category":  "Crypto",
        "updated":  "2026-08-25T08:33:30Z"
    },
    {
        "name":  "TerraFlux",
        "description":  "Precision autonomous soil moisture micro-irrigation controller",
        "url":  "https://github.com/KELLERBABG/TerraFlux",
        "github_url":  "https://github.com/KELLERBABG/TerraFlux",
        "language":  "Python",
        "category":  "General",
        "updated":  "2026-08-25T08:12:54Z"
    },
    {
        "name":  "TradeShield",
        "description":  "Zero-fraud DEX wash-trading detector and volume integrity ledger",
        "url":  "https://github.com/KELLERBABG/TradeShield",
        "github_url":  "https://github.com/KELLERBABG/TradeShield",
        "language":  "TypeScript",
        "category":  "Crypto",
        "updated":  "2026-08-25T08:13:17Z"
    },
    {
        "name":  "TransitOS",
        "description":  "Autonomous public transit fleet scheduling and demand-responsive routing kernel",
        "url":  "https://github.com/KELLERBABG/TransitOS",
        "github_url":  "https://github.com/KELLERBABG/TransitOS",
        "language":  "Rust",
        "category":  "OS",
        "updated":  "2026-08-25T08:32:26Z"
    },
    {
        "name":  "Vantablack",
        "description":  "Post-quantum onion routing protocol \u0026 zero-trace packet network",
        "url":  "https://github.com/KELLERBABG/Vantablack",
        "github_url":  "https://github.com/KELLERBABG/Vantablack",
        "language":  "Rust",
        "category":  "Crypto",
        "updated":  "2026-08-25T08:15:08Z"
    },
    {
        "name":  "ZKG",
        "description":  "Zero-Knowledge Graph computation and cryptographic proof generation",
        "url":  "https://github.com/KELLERBABG/ZKG",
        "github_url":  "https://github.com/KELLERBABG/ZKG",
        "language":  "Rust",
        "category":  "Crypto",
        "updated":  "2026-08-25T08:14:09Z"
    }
];
