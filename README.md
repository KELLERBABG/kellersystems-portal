# Keller Systems Portal

High-assurance engineering and research repository index for **Keller Systems** ([kellersystems.dev](https://kellersystems.dev)).

## Features

- **Live Repository Taxonomy**: Covers Zero-Knowledge & Post-Quantum Cryptography, Aerospace & Real-Time Kernels, Distributed Mesh Networks, and Deep Sensorics.
- **Interactive Search & Filtering**: Real-time filtering across stacks (Rust, TypeScript, Python) and security domains.
- **Ultra-Fast & Static**: Zero external runtime dependencies, deployable directly to Cloudflare Pages.

## Deployment on Cloudflare Pages

1. In the **Cloudflare Dashboard**, navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select the repository `KELLERBABG/kellersystems-portal`.
3. Set build configuration:
   - **Framework preset**: None
   - **Build command**: *(Leave blank)*
   - **Build output directory**: `/` (root)
4. Click **Save and Deploy**.
5. Under **Custom Domains**, add `kellersystems.dev` and `www.kellersystems.dev`.
