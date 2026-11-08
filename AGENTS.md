# TicketDrop: Agent Instructions

**Full guide: read [`CLAUDE.md`](CLAUDE.md) first.** It covers project goals, requirements map, invariants,
open decisions, stack, current state, commands and conventions.

Source of truth for requirements: `docs/Ticket Drop Platform — Requirements (v1).pdf`.

Three rules that matter most:
1. **Pair/mentor, not autopilot.** Implement boilerplate, config, tooling and tests directly. For core logic
   (oversell protection, queue/holds, order state machine, payments, auth, ticket signing), explain the options and let
   the owner write or approve the key pieces.
2. **Never decide D1–D8 alone.** Present options with trade-offs, wait for the owner's choice, then write an ADR.
   Tech-stack defaults not yet in the code also need an ADR before adoption.
3. **No secrets in the repo, ever.** Every setting gets a safe example value in `.env.example`.
