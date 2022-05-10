# @sound-xyz/webapp

## 8.16.0

### Minor Changes

- 3bb3bf61: Refactors CollectorsModal
- 74f1678e: Creates global decorator for storybook
- 8fc0475d: migrate twitter verify modal to radix
- b427b7c7: mirate queue modal to radix
- 21eaac8d: migrate JoinQueueModal
- 0dbefc9e: - Switches DeployArtistContractModal to radix
  - moves ModalBody to baseModal.tsx
- 022a208b: Refactor ImageViewModal to use Radix
- 8af013f6: - Creates GlobalModalNew for radix modals
  - Makes AlertModal always use openModal pattern
- ea4d240c: Bumps @soundxyz/common & @soundxyz/protocol
- 4874b290: - Refactors DeploySplitModal to use radix
  - adds sizeMap for radix modal content width
- ffd0f882: fix: remove are you sure modal and use alert modal instead
- 059e0e75: remove Coinbase from wallet modal
- ed838f8c: Refactor BuyModal to use Radix
- 87e5d2a4: BottomBar audio player uses API in-memory playlists
- 58815a6d: Allow any artist with range bound feature flag
- aeef6378: migrate share to social modal

### Patch Changes

- e337bf01: Fix: range tooltip not opening on mobile
- 57771f10: Backers click -> Collectors modal fix
- 6eea241b: add remaining quantity forms with stubbed query
- d3133578: Bijan/prod 483 rangebound quantity form
- 7efc536f: Bijan/prod 468 add new splits modal dj logic to new
- 6eea241b: Bijan/prod 494 migrate to use artistmintoptions query
- 38a12439: Remove unused graphql dependencies
- ee661caf: Update flightcontrol CDN invalidate api
- ffd0f882: Dynamic import LoginModal
- 8478b5e1: move splits modals to global modal
- 58815a6d: Set range bound as default for returning artists
- 87d37915: - Fixes DEPLOY_SPLIT width
  - Fixes MintConfirmationModal rendering (needs Portal)
- 388a1f50: Fix: UI regressions in mobile for SetCommentModal and SetTimeSlotModal
- 6d5e8968: add new mintConfirmModal
- fe40d484: User and artist pages also receive main entity as direct prop
- f44217f2: Fix: center MIN quantity text in range progress bar
- d39094b7: Fix: before the minting time, show the same range bound ui as the song page
- ffd0f882: ModalContext: Use Router singleton instead of useRouter
- 0a8bdf44: Fixes modal sizing bugs
- 594bd679: Change Ape button text from Ape to Collect with rocket emoji
- bf49b1ef: Update copy in range bound tooltip
- 7efc536f: add stub queries and empty mint button component
- 15523e8d: CreditSplits sorting bug fix
- 8982046f: Explore page uses release season instead of artist season
- Updated dependencies [584b0b17]
- Updated dependencies [38a12439]
- Updated dependencies [6c340171]
- Updated dependencies [7d1fa810]
- Updated dependencies [7d1fa810]
- Updated dependencies [6efaed1f]
- Updated dependencies [bddcc516]
- Updated dependencies [87e5d2a4]
- Updated dependencies [e0ea1a32]
- Updated dependencies [ea4d240c]
- Updated dependencies [ffd0f882]
- Updated dependencies [7d1fa810]
- Updated dependencies [87e5d2a4]
- Updated dependencies [7d1fa810]
- Updated dependencies [ebab6eeb]
- Updated dependencies [d362dd98]
- Updated dependencies [ea4d240c]
- Updated dependencies [7d1fa810]
  - @sound-xyz/db@1.22.0
  - @sound-xyz/cache@1.9.0
  - @sound-xyz/chain-helpers@0.9.0
  - @sound-xyz/helpers-db@0.6.4
  - @sound-xyz/graphql-shared@1.10.0
  - @sound-xyz/constants@0.10.0
  - @sound-xyz/utils@0.3.10

## 8.15.0

### Minor Changes

- b5a90cac: Updates modals with our custom Button
- 410ac000: Show range in mint release modal if release type is range bound
- 90f05fab: Adds Storybook
- 470c57ec: feat: added an are you sure modal when removing twitter verification
- 441eac2d: Separate artist fields from main getAuthUser
- 764fa505: refactor alertmodal to be used for alerts, errors, and confirmations
- 9cdc40e2: Replace Chakra Button pt 2:
  - named export of Button
  - CreditSplitsForm
  - Rewards
  - SeeMore
  - TwitterVerify
  - WithdrawalRelease
  - WithdrawalStats
- 4abca9e6: Improve storybook setup

  - Instead of duplicating path aliases use the TSConfig paths this way we don't break any imports
    with aliases. https://storybook.js.org/docs/react/configure/webpack#typescript-module-resolution

  - Allow to load ESM modules. There was issue with loading framer motion
    https://github.com/storybookjs/storybook/issues/16690

  - Allow having stories anywhere within components. This allows to collocate stories.

- 24fb0d31: Refactor getMintedRelease with fragments
- cdac65a1: All remaining chakra buttons -> basics/Button
- 5a5f5f7e: Add min/max progress bar to SaleInfo for range bound releases
- cece2f01: Use new flightcontrol CDN Invalidation automatically in `/api/invalidate` API route
- 24fb0d31: Remove old apollo codegen
- 3fccc0f4: - Fixes some tabbing/focused styles
  - adds `nav` variant to Button
  - removes some cruft from menu items
- f9302a19: chakra to radix : AlertModal and MintReleaseModal
- 27b0a0b8: - Fixes MintReleaseModal regression
  - Swaps out Button on pages

### Patch Changes

- 64f5975b: move quantity polling condition inside hook, call from apeButton
- 96fc26f7: range bound edition audience section
- c93e5601: Fix: nfts sold only show for range bound release and fix styling in mobile
- 441eac2d: Move showSplitsFeature to useAuthArtist
- 9dd21d79: Fix logic around displaying quantities for new/returning artist in mint release modal
- d4062a29: Fixes golden egg regression
- 4c78ce4a: Removes DisabledButtonWrapper and fixes CSS for isDisabled
- ede31636: Fix: min range bar not filling up on refresh
- cd3e2899: rm average block calc from buy modal
- bb3faca3: adding NFTs sold to pricing section
- d4062a29: Changing range tilde to dash
- 89389722: useGetRemainingNfts for publicSaleInfo and buyAndCommentModal
- 4494d834: Sold out state for range bound editions
- 750e566e: Add copy to range bound tooltips
- 2219b638: presale and public sale info using getQuantitiesPolling
- cea873de: disable button between sale times
- 06784a1b: Fix: collect button width should be fullWidth
- 3d94beb8: Modify Sale Info font weight, size, and alignment to match designs
- 2351a94b: check PQ for sold out and presaleAmount for num nfts left for buy modal
- 6efcbe07: fix buy modal logic to not use onchain startime comparison with local time
- 33820079: fix bug where range bound countdown wasnt checking if currentDate was before
- d4062a29: Fix tooltip delay duration
- 9470fffe: Fix extra divider bug in Sale Info
- ed022bf1: Create new Tooltip component using radix-ui for edition bound tooltips
- 1e5a6cad: invert equality sign on canMintWithoutSignature
- 82cf65b4: switch countdown to comments on sell out
- ce22a1f1: Changing returning artist quantity to 25
- 98e89a91: add id to getQuantities return type
- 1681ee90: fix presale total nfts regression
- cf0e0a0f: Landing hero update quantity
- bb3faca3: replaces Available NFTs with NFT Range when hasRangeBoundEdition is true and
  finalQuantity is not null
- cece2f01: Update undici to ^5.1.1
- 0e116458: add timer to re-render releasePage when mintTime is over
- 67eb4a20: replace disabled ape button with old buy modal messaging
- 24fb0d31: Refactor some default exports to named exports
- 441eac2d: Move getAuthUser.creditAllocation to lazy query on Header Avatar Menu
- 650d6eb9: Rm final quantity check
- 24fb0d31: Add PURE tags to webapp bundle to remove unused document tags definitions
- f32a7137: Fix: finalQuantity logic
- fe18f0ec: make the progress bar live after the finalSaleSchedule
- de27a5d8: handle undefined case for useGetQuantities
- 6fc67cd2: Fix: left align total NFTs in presale stats bar
- ae8c94a2: automatically toggles nfts available after final sale end time
- d58dc990: frontend min and max mintOption usage
- 6e7324b7: use release upperBound for range bound edition comment waveform
- 42fa1ea3: Bijan/prod 386 create mint time countdown for rangeBoundEditions
- c6352891: move onChainStartTime to query + add mutation to set artist range bound edition length
- 5121b87c: add eggGame id in response for cache invalidation
- 248b22f8: - Creates fullWidth and fullWidthMobile Button params
  - Fixes button width on mobile
- Updated dependencies [ee43a51d]
- Updated dependencies [64f5975b]
- Updated dependencies [6c0b010e]
- Updated dependencies [64394836]
- Updated dependencies [764fa505]
- Updated dependencies [845fd5d7]
- Updated dependencies [7ec15d43]
- Updated dependencies [cece2f01]
- Updated dependencies [54372a9e]
- Updated dependencies [0e116458]
- Updated dependencies [67eb4a20]
- Updated dependencies [c6352891]
  - @sound-xyz/db@1.21.0
  - @sound-xyz/cache@1.8.2
  - @sound-xyz/chain-helpers@0.8.2
  - @sound-xyz/constants@0.9.0
  - @sound-xyz/helpers-db@0.6.3
  - @sound-xyz/utils@0.3.9
  - @sound-xyz/graphql-shared@1.9.2

## 8.14.0

### Minor Changes

- ad978b5e: feat: add an extra row for latest sounds on landing
- ea695377: Starts removal of Chakra Button (starting with BackArrowButton)
- eb772c46: Refactor ApeButton to use separate components for public and presale
- 91e94cf5: fix regression where ape button wasn't allowing login
- e060869d: Switch from "jest" to "vitest"
- eb772c46: Add isAllowedToBuyEdition, useGetQuantiies, and useGetQuantitiesPolling hooks to
  refactor ApeButton code

### Patch Changes

- 1b6c0817: Create range bound editions from client
- b59e758d: Separate out shared comment button.
- d99d88e0: Pin apollo/client to 3.5.10
- 0f739294: Handle 0 nonce
- fa6a6f90: Dynamic import AnimatedCommentCards
- b59e758d: Splitting Ape ButtonController for presale and public sale case.
- a5067816: Fixes Opensea button regression
- 76594ec8: Duplicate and split presale and public saleinfo
- ae74652b: Decouple code for Ape button modals
- eb772c46: Bijan/prod 390 create hook to poll getQuantitiesForRelease
- b59e758d: Cleaning up unused SaleInfo component logic
- 3d992139: Update dependencies
- 29005a06: Support buying multiple UI
- 4480b5dc: /api/invalidate returns paths and buildId to use for invalidation
- a9fe0a5b: Separate comment update
- Updated dependencies [1b6c0817]
- Updated dependencies [1cca3376]
- Updated dependencies [0146b81f]
- Updated dependencies [7fa35caa]
- Updated dependencies [f546ba87]
- Updated dependencies [eb772c46]
- Updated dependencies [5430cb3f]
- Updated dependencies [3d992139]
- Updated dependencies [afdf00c2]
  - @sound-xyz/cache@1.8.1
  - @sound-xyz/chain-helpers@0.8.1
  - @sound-xyz/constants@0.8.1
  - @sound-xyz/helpers-db@0.6.2
  - @sound-xyz/db@1.20.2
  - @sound-xyz/graphql-shared@1.9.1
  - @sound-xyz/utils@0.3.8

## 8.13.0

### Minor Changes

- 45bfdfc7: Refactor artist/release/presale pages static props
- cf4d7de3: Set default watch query fetchPolicy to "cache-and-network"
- fc806dec: Add soundxyz user-agent
- 24a9f9e1: Remove SoundCardFetcher and use SoundVerticalCard instead
- 5879d8e7: Cache api metadata

### Patch Changes

- 5879d8e7: Set cache control max-age to 60 seconds
- fa2c721f: Generate static build id for flightcontrol deployments
- Updated dependencies [d5c9fe47]
- Updated dependencies [fc806dec]
- Updated dependencies [3cdbabac]
- Updated dependencies [5879d8e7]
  - @sound-xyz/chain-helpers@0.8.0
  - @sound-xyz/constants@0.8.0
  - @sound-xyz/graphql-shared@1.9.0
  - @sound-xyz/cache@1.8.0
  - @sound-xyz/db@1.20.1
  - @sound-xyz/helpers-db@0.6.1
  - @sound-xyz/utils@0.3.7

## 8.12.0

### Minor Changes

- b7270b17: sound vertical card: show season of release

### Patch Changes

- fbd808db: make presale icon configurable
- Updated dependencies [6df35882]
- Updated dependencies [d9e3a69e]
  - @sound-xyz/helpers-db@0.6.0
  - @sound-xyz/db@1.20.0
  - @sound-xyz/cache@1.7.1
  - @sound-xyz/chain-helpers@0.7.8
  - @sound-xyz/graphql-shared@1.8.6

## 8.11.0

### Minor Changes

- 795ee0ab: Refactor ApeButton to use separate components for public and presale

### Patch Changes

- 3a37feec: changing max returning artist quantity to 30

## 8.10.0

### Minor Changes

- 352d1371: Change faq link to help.sound.xyz

### Patch Changes

- 2ca1e77a: Set workspace packages range as \*
- e934e1a1: Fix PublicSaleCountdown component rendering
- 0d3ddbde: Fix: remove fixToBottom variant for BuyModal
- 0658e07d: added buttons for pagination artists on sound landing
- Updated dependencies [2ca1e77a]
- Updated dependencies [619d3f11]
- Updated dependencies [f68cef78]
  - @sound-xyz/cache@1.7.0
  - @sound-xyz/chain-helpers@0.7.7
  - @sound-xyz/graphql-shared@1.8.5
  - @sound-xyz/helpers-db@0.5.1
  - @sound-xyz/utils@0.3.6
  - @sound-xyz/db@1.19.0

## 8.9.0

### Minor Changes

- 8cbdee99: Add new upstash api for Next.js serverless usage
- 426ffad1: Increase cache control headers for API metadata.

### Patch Changes

- 00c85741: Memoize Audience component
- 8222c377: Set images minimumCacheTTL to 9999
- a933ef1c: Add sharp as dependency for Next.js image optimization
- d52f8a8e: Revert "Camilla/prod 304 refactor usemintedreleaseinfo hook (#3197)"
- Updated dependencies [25b5fb70]
  - @sound-xyz/helpers-db@0.5.0
  - @sound-xyz/cache@1.6.4
  - @sound-xyz/chain-helpers@0.7.6

## 8.8.3

### Patch Changes

- 016b2fa2: Fix: play button doesn't show without refreshing page during presale listening party
- 23afcafa: Filter uniques and make sure it's sorted for mint options.
- Updated dependencies [e16652ae]
- Updated dependencies [56e4cb9f]
- Updated dependencies [b3bba71b]
  - @sound-xyz/db@1.18.2
  - @sound-xyz/chain-helpers@0.7.5

## 8.8.2

### Patch Changes

- ff7d37c3: (Workaround until paginations are separated) Only show up to 4 on the landing paginated
  releases
- Updated dependencies [fa5cc2e8]
- Updated dependencies [fa5cc2e8]
  - @sound-xyz/utils@0.3.5
  - @sound-xyz/db@1.18.1

## 8.8.1

### Patch Changes

- 8654badf: Improve client-side presale redirecting logic

## 8.8.0

### Minor Changes

- 96df0df4: New artistv4 backend changes

### Patch Changes

- 5339f6f3: Replace ETH symbol with BAYC logo in presale page
- 19bfb60a: Removes SENTRY_DSN env var references (not needed)
- aafbf59b: Fix presale redirection
- b51406bf: Ignore expected errors to sentry
- 96df0df4: Fallback UI error if ticketNumber or signature missing
- 0f6c5dc9: Fix: collect modal spacing with long song titles
- Updated dependencies [96df0df4]
  - @sound-xyz/chain-helpers@0.7.4

## 8.7.0

### Minor Changes

- 4a7ff53d: Add extra graphql queries to release page ISR
- 795bb732: Presale page ISR queries

### Patch Changes

- c42372e6: Separate getAllUnmintedReleases from main bottombar query

## 8.6.0

### Minor Changes

- 44e83ef2: Adds signature guard in handleBuy

### Patch Changes

- b96b6402: Fix: artist upload waveform not showing duration badge
- 06029269: Tx modal not closing when tx completes
- 1362b4be: replace usage of getReleaseById
- 60c208ce: optimize metadata api queries
- c4920e37: remove sentry tracing sample rate
- aa07c132: Only create pusher connection if user is authenticated
- c19f1764: fix sold out modal appearing for normal drops
- 93625c7a: - removes unused queries in `MintReleaseModal`
- Updated dependencies [949ba92d]
- Updated dependencies [4aab99cb]
- Updated dependencies [8f3c8373]
- Updated dependencies [96b072bb]
- Updated dependencies [c94c19a9]
- Updated dependencies [f16c1a65]
- Updated dependencies [79b5157f]
- Updated dependencies [1765775c]
- Updated dependencies [2a5c3984]
  - @sound-xyz/chain-helpers@0.7.3
  - @sound-xyz/db@1.18.0
  - @sound-xyz/graphql-shared@1.8.4
  - @sound-xyz/cache@1.6.3
  - @sound-xyz/helpers-db@0.4.3
  - @sound-xyz/constants@0.7.2

## 8.5.1

### Patch Changes

- 6b0cba7e: Changing max returning artist quantity from 50 to 35
- 3446aef0: fix: latest sounds loading state
- Updated dependencies [0322b98a]
- Updated dependencies [7522608d]
- Updated dependencies [7522608d]
  - @sound-xyz/cache@1.6.2
  - @sound-xyz/constants@0.7.1
  - @sound-xyz/graphql-shared@1.8.3
  - @sound-xyz/db@1.17.1

## 8.5.0

### Minor Changes

- 5347f15d: latest sounds on landing, with pagination

## 8.4.0

### Minor Changes

- 59354c10: added artist name on metadata
- 05fc0536: Move audioRevealTime and track audio to separate query
- 05fc0536: Use publicListeningParty for releases start time on lists/cards

### Patch Changes

- 049bd235: change useLogError and useToast to named export
- f41edeb3: update deps
- b5e4266b: Fix ListeningPartyFooter as component
- 0ee36dc8: drop old presaleConfig columns
- 4b963b90: Removes dead constants
- d07cb687: Call handle create edition from frontend
- 05fc0536: add getPresaleTimes to presale static props
- 05fc0536: filter explore releases based on mintInfo startTime instead of audioUrl
- d07cb687: Register edition id on release
- 049bd235: Prevent toast loop of queue errors
- 046f6730: Fix import type error
- f41edeb3: Update Sentry to 6.19.6
- d53d107c: fix cropping of cover image upload
- a6365b73: Fix presale page unexpected state (refactor page props)
- 22b2a7c1: Add copy for BAYC presale
- 6fbfaf2f: Changing media findFirst to findUnique.
- Updated dependencies [f41edeb3]
- Updated dependencies [0ee36dc8]
- Updated dependencies [d07cb687]
- Updated dependencies [fd788a7a]
- Updated dependencies [fa413603]
- Updated dependencies [2f7ed770]
- Updated dependencies [d07cb687]
- Updated dependencies [31b31a73]
- Updated dependencies [e73d9714]
- Updated dependencies [f41edeb3]
- Updated dependencies [71c35d5f]
- Updated dependencies [7c143ef0]
- Updated dependencies [8488ccee]
- Updated dependencies [05fc0536]
- Updated dependencies [6fbfaf2f]
  - @sound-xyz/cache@1.6.1
  - @sound-xyz/chain-helpers@0.7.2
  - @sound-xyz/helpers-db@0.4.2
  - @sound-xyz/constants@0.7.0
  - @sound-xyz/db@1.16.1
  - @sound-xyz/graphql-shared@1.8.2
  - @sound-xyz/utils@0.3.4

## 8.3.1

### Patch Changes

- 94e02544: fix ui display for timers
- 2a23c441: added artist verified check on artist comments
- Updated dependencies [f1e97566]
- Updated dependencies [f1e97566]
- Updated dependencies [5037eb1f]
- Updated dependencies [b979eaa3]
- Updated dependencies [f1e97566]
- Updated dependencies [2cd93757]
  - @sound-xyz/cache@1.6.0
  - @sound-xyz/graphql-shared@1.8.0
  - @sound-xyz/db@1.16.0

## 8.3.0

### Minor Changes

- 12387fdd: added audio meta tags

### Patch Changes

- 9c78cf76: Register edition id on release
- 6e397eb9: Fix: sold out modal should say sold out not error
- Updated dependencies [9c78cf76]
  - @sound-xyz/db@1.15.4

## 8.2.0

### Minor Changes

- 42844ac0: implement onlyTokenHolders presaleMedia resolver

### Patch Changes

- Updated dependencies [2c05e4f8]
- Updated dependencies [2c05e4f8]
- Updated dependencies [1e3c21b8]
- Updated dependencies [42844ac0]
- Updated dependencies [be5c8e3a]
  - @sound-xyz/cache@1.5.4
  - @sound-xyz/db@1.15.3
  - @sound-xyz/chain-helpers@0.7.1

## 8.1.0

### Minor Changes

- e7440d85: - Adds react-intersection-observer (~1.7 kB gzipped)
  - Lazy loads Audience section

### Patch Changes

- 10bc4b01: fix: avatars not showing up in artist collectors modal
- aaec59e3: Fix: "be the first backer" box z index too low
- Updated dependencies [8ea7832d]
- Updated dependencies [2219c31b]
  - @sound-xyz/utils@0.3.3
  - @sound-xyz/cache@1.5.3
  - @sound-xyz/db@1.15.2

## 8.0.0

### Major Changes

- 5f6fa2e6: Move core api into separate package

### Minor Changes

- 335e9d0e: Show unminted releases in artist page
- 2cdf0561: Move file+network constants to constants pkg
- 72d5f3df: - Bumps Next version (patch)
  - Accomodates unbounded number of backers in Audience
- 27631717: Move auth to gateway schema

### Patch Changes

- 2cdf0561: Move sumBigNumbers, getUsersPortionOfBalance & formatWeiToEth to chain-helpers utils
- d81371ca: Improve artist upload by checking for pending transactions and upserting presale
  configuration at the start
- 2cdf0561: Move createTestReleases to test-utils pkg
- 7474291b: fix marquee on mobile
- 27631717: Skip error masking on non-production deployments
- 73bb7678: Fixes mobile menu vertical spacing
- 95878c2e: Changing some find firsts to find uniques.
- 2cdf0561: Sort API imports
- 2cdf0561: Isomorphic buildContext (doesn't depend on server)
- Updated dependencies [2cdf0561]
- Updated dependencies [2cdf0561]
- Updated dependencies [5f6fa2e6]
- Updated dependencies [95878c2e]
- Updated dependencies [b7d2c779]
  - @sound-xyz/chain-helpers@0.7.0
  - @sound-xyz/constants@0.6.0
  - @sound-xyz/db@1.15.1
  - @sound-xyz/cache@1.5.2
  - @sound-xyz/helpers-db@0.4.1
  - @sound-xyz/graphql-shared@1.7.3
  - @sound-xyz/utils@0.3.2

## 7.5.0

### Minor Changes

- 942e48dc: paginated artists query
- 942e48dc: tests for paginated artists with season

### Patch Changes

- b507cb25: Removing nullable on artist contract address.
- 6d31c802: Featured songs auto play adjustment
- d246f460: Fixes Split button text on withdrawal page
- Updated dependencies [85d0b66f]
- Updated dependencies [942e48dc]
- Updated dependencies [b507cb25]
- Updated dependencies [d246f460]
- Updated dependencies [942e48dc]
  - @sound-xyz/utils@0.3.1
  - @sound-xyz/db@1.15.0
  - @sound-xyz/cache@1.5.1

## 7.4.0

### Minor Changes

- c8c4800f: Improve error handling in song page
- b6fedfed: Improve error handling in ApeButton component
- 79e6559c: purge upcoming releases when last NFT is bought
- acaf1b4c: Improves withdrawal page error handling

### Patch Changes

- ad2790f0: Move webapp helpers into shared packages
- aceb702b: Clean up: presale and golden egg styling in audience table in mobile
- 57f7de94: Auto Scroll fix
- d91e74fc: timer bug fix on featured songs
- 61710e72: Add missing used dependencies to package.json
- 9f43580b: fix saleSchedule poll
- cc8096e1: auto play for featured songs added on desktop
- aa30c968: Move /types/shared to @sound-xyz/constants
- Updated dependencies [04f5bd41]
- Updated dependencies [ad2790f0]
- Updated dependencies [79e6559c]
- Updated dependencies [61710e72]
- Updated dependencies [7508b740]
- Updated dependencies [793b36e4]
- Updated dependencies [61710e72]
- Updated dependencies [acaf1b4c]
- Updated dependencies [9f43580b]
- Updated dependencies [ce2c965e]
- Updated dependencies [793b36e4]
- Updated dependencies [7508b740]
- Updated dependencies [58dae291]
- Updated dependencies [aa30c968]
- Updated dependencies [7508b740]
- Updated dependencies [8072fea7]
  - @sound-xyz/utils@0.3.0
  - @sound-xyz/chain-helpers@0.6.0
  - @sound-xyz/db@1.14.0
  - @sound-xyz/cache@1.5.0
  - @sound-xyz/constants@0.5.0
  - @sound-xyz/helpers-db@0.4.0
  - @sound-xyz/graphql-shared@1.7.2

## 7.3.1

### Patch Changes

- e3aaac83: SSR uses gateway instead of local schema

## 7.3.0

### Minor Changes

- 8e9f0eca: Show captcha modal in public sale if feature flag is enabled

### Patch Changes

- e249d16c: Adding season 1 artist default minting options
- 8e9f0eca: captcha enforced by queue service, can be disabled with feature flag
- e249d16c: Refactoring countdown cards
- e249d16c: Fix: spinner stuck for admin chat messages
- 33ecae0d: animation on latest releases
- e249d16c: Refactor CountdownCard.tsx component to be used in Presale and Release page
- e249d16c: fix padding on public addr
- 23bc645b: Fix: grid broken in latest sounds page in mobile
- Updated dependencies [8e9f0eca]
  - @sound-xyz/helpers-db@0.3.2

## 6.2.0

### Minor Changes

- 66f403ba: Moving Audience components into a subdirectory

### Patch Changes

- c12fa21d: fix user handle spacings

## 6.1.0

### Minor Changes

- 327c98a3: Fixes landing page featured releases hydration jank

### Patch Changes

- 691ec2ab: Access denied zindex bug

## 6.0.2

### Patch Changes

- 58d652e1: Fix public listening party link.
- 26a06a94: Fix golden egg zindex bug
- Updated dependencies [5042b2f6]
  - @sound-xyz/cache@1.3.1

## 6.0.1

### Patch Changes

- 1625367d: Close modals on presale redirect

## 6.0.0

### Major Changes

- e1b4ad25: Presales

### Minor Changes

- 4debdce7: Multiple Sound Drops on Landing
- d50cd12c: Typed whitelist rules & isPresale boolean for sale schedule
- e1b4ad25: Add captcha (used in presale)
- c761fa73: Adds handleSaveSplitsAccess to admin page Adds showSplitsFeature to authUser
- e1b4ad25: Reveal time + audio reveal cached

### Patch Changes

- 15e6942d: Capitalizes FeatureFlag model for consistency Adds SPLITS and CHAT to FeatureType
- e1b4ad25: Allow SaleInfo component to be used in presale and song page
- 080e6bd2: presale page: only bottom container requires presale config data
- 751af94c: Presale UI fixes
- 1e9b1370: Add ids to sale schedules queries
- 1e9b1370: Improve live party modal logic
- f1a7cdbf: Disable waveform for release while presale
- f10d34a1: Update presale countdown designs
- 7d92e24e: Always allow edit on main release page
- d50cd12c: Improve useTimer with global synced timer
- d50cd12c: Refactor mint release modal to use new gql tag format
- 1e9b1370: Add autoplay to presale
- d50cd12c: Cleanup presale date handling
- 4780252c: Fix prevent wrong logout calls
- 0c00d26c: Show countdown to mint start time in release page
- a4a4a021: Fix queue status check on action button disabled
- f887a929: Updated text in qualified holders section in presales
- Updated dependencies [15e6942d]
- Updated dependencies [73dd6b88]
- Updated dependencies [ff635a24]
- Updated dependencies [73dd6b88]
- Updated dependencies [73dd6b88]
- Updated dependencies [e1b4ad25]
- Updated dependencies [71b53999]
- Updated dependencies [e1b4ad25]
- Updated dependencies [73dd6b88]
- Updated dependencies [73dd6b88]
- Updated dependencies [71b53999]
- Updated dependencies [e1b4ad25]
  - @sound-xyz/db@1.11.0
  - @sound-xyz/cache@1.3.0
  - @sound-xyz/chain-helpers@0.4.2

## 5.13.1

### Patch Changes

- 9e137da2: switched position of soundhandle and public addr
- 10a74350: improve LIMIT_STATIC_PATHS logic

## 5.13.0

### Minor Changes

- 763cc315: Improves release page render/loading state
- 6cc6447f: Use auth-token header+localstorage for token-based authentication
- 6cc6447f: API calls require a server-side confidential token only sent by gateway (calling
  webapp/queue services should go through the gateway)

### Patch Changes

- 2d780405: fix width on season profile
- 6cc6447f: Remove graphiql in favor of altair
- 6cc6447f: only use response caching for SSR calls, leverage gateway for api response caching
- Updated dependencies [6cc6447f]
  - @sound-xyz/graphql-shared@1.7.0

## 5.12.0

### Minor Changes

- 451ec98d: Add `hasAppMounted` to `useMedia`
- 83519986: Profile UI redesign

### Patch Changes

- 72d7a00b: Adds maxDecimals to formatWeiToEth
- 451ec98d: Fixes LandingLatestSounds render bug
- 3f0a2119: logo colour fix for mobile
- 3650cb09: Fix static pages not found to 404
- f4f3a4b5: Bumps @soundxyz/protocol - patch
- Updated dependencies [f4f3a4b5]
  - @sound-xyz/chain-helpers@0.4.1

## 5.11.1

### Patch Changes

- 78149823: Fixes soundxyz/common package

## 5.11.0

### Minor Changes

- 0728f6ec: add explore icon to nav menu
- 3fc614b9: Upgrades to ArtistV3 (@soundxyz/protocol@v4.0.0)
- 53934bf2: Allow uploading avatars for users
- 0728f6ec: add twitter og image for explore page
- 53934bf2: Create a common upload mutation for user profile

### Patch Changes

- 8b8d56f7: Add "staging" as possible value of NEXT_PUBLIC_VERCEL_ENV
- 79a3212a: Fix contract log parsing.
- 67854b88: Update chat rendering logic so chat image doesn't show unless chat is enabled
- aab32e9c: Removes gasLimit from distributeETH call
- 8b8d56f7: Limit static paths on preview
- Updated dependencies [79a3212a]
- Updated dependencies [3fc614b9]
- Updated dependencies [939a2e47]
  - @sound-xyz/chain-helpers@0.4.0
  - @sound-xyz/cache@1.2.2

## 5.10.0

### Minor Changes

- 089e574a: Explore Page added

### Patch Changes

- a7d09d84: Only subscribe to channel if chat window is open
- 179892c2: Golden Egg UI for Audience
- 3434e0d7: Temporary fix for trending page collectors tab bug

## 5.9.1

### Patch Changes

- 41a3e5bf: hides user info for admin chat messages
- 41c177a1: Only subscribe to channel if chat window is open
- aa9eaf38: Fix sold out text sizing in smaller screen sizes"
- 3bc36d1d: Fix width of address container in collectors row in trending page
- Updated dependencies [41a3e5bf]
  - @sound-xyz/cache@1.2.1

## 5.9.0

### Minor Changes

- e99af063: - Updates package versions
  - Fixes seed.ts so it create/upserts based on on-chain data

### Patch Changes

- 5d6a030a: Use the same Pusher in notification.tsx and chat instead of creating multiple
- Updated dependencies [e99af063]
  - @sound-xyz/cache@1.2.0
  - @sound-xyz/chain-helpers@0.3.0
  - @sound-xyz/db@1.10.0

## 5.8.3

### Patch Changes

- 4d9ff761: Trending page responsiveness
- d4c8c762: Fix artist page redirecting on db error
- d4c8c762: Fix release page redirecting on db error
- d4c8c762: Fix user page redirecting on db error
- d3052b69: Use fragment in BehindTheMusic component to improve load performance
- Updated dependencies [e421be9b]
  - @sound-xyz/cache@1.1.3
  - @sound-xyz/constants@0.4.1

## 5.8.2

### Patch Changes

- 535d2636: invalidate error included in json
- 036fc1a7: Response cache - Redis usage gracefully fails
- 1ed6dd0a: Don't call pinata on set comment testing

## 5.8.1

### Patch Changes

- 8f20eacc: Allow null from getUser query
- a4b36bd7: setting fallback audioRevealTime to be Date.now()
- fc12f103: Converts bottom player "buttons" (divs) to buttons and fixes click area

## 5.8.0

### Minor Changes

- 0779acfd: Latest page ISR

### Patch Changes

- 150cb9ca: enables ape button for seed data
- Updated dependencies [6901b62f]
  - @sound-xyz/cache@1.1.2

## 5.7.0

### Minor Changes

- 27d2dc95: Trending page ISR
- 2bb0e555: New "/api/invalidate" to invalidate ISR pages

### Patch Changes

- 27d2dc95: Make trending tabs router push shallow, ref:
  https://nextjs.org/docs/routing/shallow-routing
- 24338ccd: ISR user profile pages

## 5.6.0

### Minor Changes

- 605008ef: refactor ape button to not call nftBackersData
- e787fedb: Limits waveform to 200 avatars
- 11a5a5a2: artist page uses ISR
- 8d0612f2: release page uses ISR

### Patch Changes

- 56f0bb44: Fixes waveform avatar selection
- 62ae799a: Ape button calls useTimer for time-related checks
- 5aa87ed6: Use profile component fragments.
- 62ae799a: useTimer also accepts number
- 62ae799a: Stop polling queue status if sold out
- 4c4c1785: Clean unncessary types and auth as named export
- d23c3e95: Refactor waveform and release card queries
- 62ae799a: Disable polling of queue until minting starts
- 4c4c1785: Release page prefetch search and bottom bar
- 205d9d60: cache loader for getEggGame + skips getEggGame query when there are still available NFTs
- a65ee89b: Design feedback
- 4c4c1785: Artist page prefetch search results & bottom bar
- aefdfabe: Fix all avatars at top of message container regardless of message length
- Updated dependencies [32fde61b]
- Updated dependencies [e787fedb]
- Updated dependencies [05ad6b4c]
- Updated dependencies [205d9d60]
  - @sound-xyz/db@1.9.0
  - @sound-xyz/cache@1.1.1
  - @sound-xyz/chain-helpers@0.2.6

## 5.5.0

### Minor Changes

- d6069f00: Wrap schema with envelop on SSR (tracing+auth middleware)
- b2c3cb5a: statically generate homepage
- c3a9d6a6: Use custom version of response-cache graphql plugin

### Patch Changes

- 86af494b: Add extra auto scroll down on chat open
- 1e6500ff: removing high refresh rate for audio player
- d6069f00: Allow undefined request object
- Updated dependencies [891026ff]
- Updated dependencies [d6069f00]
- Updated dependencies [c3a9d6a6]
  - @sound-xyz/db@1.8.0
  - @sound-xyz/graphql-shared@1.6.3
  - @sound-xyz/cache@1.1.0

## 5.4.0

### Minor Changes

- 5fbf39d4: prefetch bottom bar and search results on trending and latest page

### Patch Changes

- 91a1f3af: Move shadow ban UI from admin UI to its own page

## 5.3.2

### Patch Changes

- 784d04ad: Fix chat and audio player layout in mobile
- c3e0f458: Ensures share modal loads comment
- 53b318de: prefetch sound card data to avoid client side fetch
- Updated dependencies [bc0470a8]
  - @sound-xyz/constants@0.4.0
  - @sound-xyz/cache@1.0.4
  - @sound-xyz/chain-helpers@0.2.5
  - @sound-xyz/db@1.7.8
  - @sound-xyz/graphql-shared@1.6.2

## 5.3.1

### Patch Changes

- c9417d36: Fix duplicated transaction notification
- 5fc7dfb7: Sort audience backers.

## 5.3.0

### Minor Changes

- 6d728f65: refactor bottom audio bar to fetch only necessary fields

### Patch Changes

- 953a747b: Fix auto-scroll to bottom
- 8d63f342: fix closeModal set initial modal state with login
- cac9c6c7: Fix spinner flicker bug in slow networks
- 5ed08e35: Set overflow to hidden in chat window
- Updated dependencies [8d63f342]
- Updated dependencies [1a169988]
  - @sound-xyz/db@1.7.7
  - @sound-xyz/cache@1.0.3

## 5.2.0

### Minor Changes

- e9d9ff07: refactor latest page SSR query

### Patch Changes

- Updated dependencies [73747abe]
  - @sound-xyz/cache@1.0.2

## 5.1.0

### Minor Changes

- edbdd005: refactor search bar query

### Patch Changes

- 76644468: Improve chat open logic & fix first time logic
- da0e5d9e: Fix regression showing overlay in mobile if user is not in chat
- dd5665e5: Improve scroll fetch behavior

## 5.0.2

### Patch Changes

- 65214e77: Fixed avatar borders in chat
- c8c36a34: Fixed problems causing touch and drag to not work in mobile
- 1b2651d4: Clicking artist avatar in chat links to artist page and remove admin avatar link"
- 02f27129: keep state of chat window open / closing
- 8f10c9ee: Fix title styling in chat

## 5.0.1

### Patch Changes

- 506ba74a: remove reliance on artistContractId in Events; push to eventsv2
- 53aaa461: Rename chatroom to greenroom
- 4ae84380: autoscroll when outside message comes in and chat window is greater than 90% scroll
  percentage
- 25a9ae39: default opens chat window when user first signs in
- Updated dependencies [506ba74a]
- Updated dependencies [f8b70b80]
  - @sound-xyz/db@1.7.6
  - @sound-xyz/cache@1.0.1

## 5.0.0

### Major Changes

- 3f279bc8: Chat system

### Minor Changes

- 3f279bc8: New "usePagination" custom hook

### Patch Changes

- b6a3debb: shadow banned users create hidden message
- 3f279bc8: shadow ban updates and notifies hidden messages
- 3f279bc8: verifyTwitter invalidates user cache
- 7b156aba: fix release page type error
- eef6baf6: Add and show shadow banned addresses in admin UI
- b6a3debb: Don't render hidden messages
- efa66f85: Change positioning of Spinner in chat text container"
- 3f279bc8: remove lazy promises from pagination helpers to allow full-data cache
- b6a3debb: Improve pending message logic
- 3f279bc8: Move basicRandomString to util package
- 1a1b9277: change cache policy to networkOnly for getChatMessages
- 1b33ccba: fixes open chat scroll after cache
- b6a3debb: sending message returns created message id
- 3f279bc8: flexible addShadowBanAddress & removeShadowBanAddress
- 3f279bc8: createArtist mutation invalidates user cache
- b6a3debb: Improve caching of chat messages by id
- 3f279bc8: Improve timeAgo helper
- Updated dependencies [3f279bc8]
- Updated dependencies [3f279bc8]
- Updated dependencies [3f279bc8]
- Updated dependencies [b6a3debb]
- Updated dependencies [3f279bc8]
- Updated dependencies [3f279bc8]
- Updated dependencies [a3399cf2]
- Updated dependencies [6f20c3f3]
- Updated dependencies [b6a3debb]
  - @sound-xyz/constants@0.3.0
  - @sound-xyz/cache@1.0.0
  - @sound-xyz/db@1.7.5
  - @sound-xyz/helpers-db@0.3.0
  - @sound-xyz/chain-helpers@0.2.4
  - @sound-xyz/graphql-shared@1.6.1

## 4.9.0

### Minor Changes

- 1180ebff: Refactor song page query

## 4.8.0

### Minor Changes

- 4468f02a: ENS resolution for users

### Patch Changes

- ee1aee4a: altair and introspection behind secret on prod

## 4.7.1

### Patch Changes

- f2ab51bb: Refactor cache loaders structure with namespaces
- Updated dependencies [18cf6d6f]
- Updated dependencies [f2ab51bb]
  - @sound-xyz/db@1.7.4
  - @sound-xyz/cache@0.3.1

## 4.7.0

### Minor Changes

- 4649a4c0: Move base_url logic back to con
- 6e4fa1db: Prefetch All Minted releases query
- 1dc94e67: Add User ENS support

### Patch Changes

- 925e6485: Fixes twitter card image not rendering
- 8b621cf4: fix LimitedUpcomingAndPastMintedReleases cache-only
- 6cb97a28: Fixes processing modal hanging bug
- 128c68bb: Bye artist.contracts, hello artist.contract
- Updated dependencies [1dc94e67]
  - @sound-xyz/cache@0.3.0
  - @sound-xyz/chain-helpers@0.2.3

## 4.6.0

### Minor Changes

- e9d0364b: add `mintInfo` field to release and deprecate `mintInfos` since we only have support for
  one chain.
- b1eceef3: Use paginated releases on landing page
- 833f7cd8: Make `/latest` page SSR
- 833f7cd8: Refactor SoundCard component to useFragment. Splits the component to 2 differnt
  components one that can fetch all data on its own and the other which can just consume a fragment.
  Depending on use case can use either.
- b1eceef3: New API queries pastMintedReleases and upcomingMintedReleases

## 4.5.3

### Patch Changes

- 5a28fb54: Rename tokenIdStr to tokenId
- Updated dependencies [c28dad96]
- Updated dependencies [5a28fb54]
  - @sound-xyz/db@1.7.3
  - @sound-xyz/chain-helpers@0.2.2

## 4.5.2

### Patch Changes

- 8cb3a266: Change tokenIdStr to required. Swap resolver from number to string. Remove old tokenId
  column.
- Updated dependencies [8cb3a266]
  - @sound-xyz/chain-helpers@0.2.1
  - @sound-xyz/db@1.7.2

## 4.5.1

### Patch Changes

- 2b851bd9: Remove "nftBackersLoading" from isActionButtonDisabled conditional
- Updated dependencies [5f34f0f4]
  - @sound-xyz/db@1.7.1

## 4.5.0

### Minor Changes

- 531ca527: Enable GraphQL API tracing
- 432ed0f8: Use fragment masking with codegen
- 91b70970: Restructure and separate shared code on different packages

### Patch Changes

- 3609547e: Bijan/pro 16 more comprehensive client nft upserts
- a6d3153d: Switched positioning of wall comment card
- ca905beb: updated web3modal package
- 7e077770: Bijan/infra 45 replace all instances of nexus prisma
- 1ca27c78: Move cache helpers & start cache loaders on @sound-xyz/cache
- 2270648b: changed 'Metamask' to 'Download Metamask'
- f7ac152c: css fix for web3modal
- Updated dependencies [f3ae84b0]
- Updated dependencies [531ca527]
- Updated dependencies [7e077770]
- Updated dependencies [f3ae84b0]
- Updated dependencies [97023ec2]
- Updated dependencies [91b70970]
- Updated dependencies [1ca27c78]
- Updated dependencies [bea16db2]
  - @sound-xyz/graphql-shared@1.6.0
  - @sound-xyz/cache@0.2.0
  - @sound-xyz/db@1.7.0
  - @sound-xyz/chain-helpers@0.2.0
  - @sound-xyz/constants@0.2.0
  - @sound-xyz/utils@0.2.0

## 4.4.0

### Minor Changes

- 4cf9792f: New fine-grained cache helpers "getCached" and "invalidateCache"
- 6e5fa4e2: Share reusable styles and components across comment modals

### Patch Changes

- b2748ba6: add backfill script and create new column
- c79f3319: Skip mintInfo for landing page waveform query
- 731c36aa: Await and retry 3 times to register a transaction hash.
- 8e8c01e8: Breaks the mega handleTransaction into subfunctions. Fixing some promise related bugs.
- 1957cde9: Audio Playback On Comment Card, removed pause on timeslot select
- ac201676: Make queues the default and invert feature flag to disable
- b05c3fc5: Rerender ape button at auction start time
- Updated dependencies [b2748ba6]
  - @sound-xyz/db@1.6.3

## 4.3.0

### Minor Changes

- f40cf0d7: API validates UUID inputs
- 1efedb5f: Reduce unecessary network requests.

### Patch Changes

- a7a717bc: Centers processing modal in mobile
- 1efedb5f: Redesign comment modals
- 1efedb5f: return null on leaving unexistent queue
- 1efedb5f: Bijan massoumi/2413 add fragment support to trending page url
- 7ca93030: Fix pausing audio bug
- 4b466b90: Move isReleaseOwner check to collect modal
- f40cf0d7: Rewrite queries to use UUID where required
- 1efedb5f: Bijan massoumi/2441 comment card max height
- 26afb62d: Change avatar default export and fix anchor descendant of anchor on search results
  artists
- f40cf0d7: Add UUID custom scalar to schema
- Updated dependencies [f40cf0d7]
  - @sound-xyz/graphql-shared@1.5.1

## 4.2.0

### Minor Changes

- 5796b278: Reduce unecessary network requests.

### Patch Changes

- f5d75373: Fix ChakraNextImage forward ref
- 9a007928: Adding careers section.
- f5d75373: Fix StatusBar mapping key
- f5d75373: Fix skip useGetNftBackersData
- 1c22c19c: fix changing artist cover photo

## 4.1.0

### Minor Changes

- 2108160f: re-work getAllMintedReleasesPaginated to accept ordering by mintStartTime
- 2108160f: Refactor pagination helpers to allow custom cursors
- 82d1809c: feat: Added Coinbase Wallet Support

### Patch Changes

- 69b9fa56: Cache metadata api
- 54480538: Redesign comment modals
- b832a334: Changes getUsersPortionOfBalance to use Math.round
- 8d64a957: Fix: don't require un-authenticated users to verify twice when clicking ape
- 1bac95ff: fix background image issue
- 2108160f: Update release "mintStartTime" on confirmed transaction
- 2d44bff1: fix: golden egg not appearing after save
- 54480538: return null on leaving unexistent queue
- 4449a310: Rename response cache instance
- 6d52179b: Check if queue is open before calling joinQueue
- 4449a310: Fix createTestReleases flaky tests
- 54480538: Bijan massoumi/2413 add fragment support to trending page url
- 4449a310: export ioredis instance
- 4e54e89b: Change queue id inputs types to UUID
- 54480538: Bijan massoumi/2441 comment card max height
- 52a58e1e: Quiet coingecko error
- 935e5cb4: fix: fadeout when moving to next modal on comment flow
- Updated dependencies [2108160f]
- Updated dependencies [4449a310]
- Updated dependencies [4e54e89b]
- Updated dependencies [2108160f]
  - @sound-xyz/db@1.6.2
  - @sound-xyz/graphql-shared@1.5.0

## 4.0.1

### Patch Changes

- 30091989: Separate GraphQL API Context type from queue
- a3edba0f: Adding golden egg to sound card.
- 8550c16d: Hide avatars on waveform until a comment is populated.
- ade493c6: Fixing edit profile buttons showing up on other profiles.
- b78ebe13: Bijan massoumi/2413 add fragment support to trending page url

## 4.0.0

### Major Changes

- 1b5c0c35: 2414 - Add Name to Edit Profile Form

### Patch Changes

- 1ae42080: Update dependencies
- 08c5c74c: return null on leaving unexistent queue
- 1ae42080: Update svgr from v5 to 6.2.1, ref: https://github.com/gregberge/svgr/releases
- 841006da: Bijan massoumi/2413 add fragment support to trending page url
- df84a5ef: ignore "Not authorized!" errors to sentry
- e2d86e5b: Show twitter handles as fallback in splits section.
- Updated dependencies [1ae42080]
- Updated dependencies [1f5091bc]
  - @sound-xyz/db@1.6.1

## 3.5.1

### Patch Changes

- eb39818a: Improve auth context types and state provider usage
- a45c2e96: fix bug with latest sound timer
- c279aca5: Fix ProfileInfo and ProfileHeader caching
- 1fd92b5f: add check for null on songSlot
- b2bb68e4: cleanup ProfileInfoCollector component query
- eb39818a: implemented logout on account switch

## 3.5.0

### Minor Changes

- 09ff4dd6: refactor sales info component so it fetches its own data
- d0397da5: refactor behind the music component to fetch it's own data
- 55930841: Return URL for transcoded audio from audio service
- b1b50122: Add a new media type for transcoded audio
- e60698ea: Shows new withdrawal page to all users

### Patch Changes

- 31f5bc27: Refactor all media query usage to use global container.
- 6fb8458f: fix: missed icon on navbar
- a770b472: query refactor for Profile Info Component
- 5b798f77: listen to audio while you're commenting on the song
- 2e4418a3: Update @soundxyz/web3modal to 0.3.3 with fixed react key
- 3f6eddea: Change profile details query to read from cache.
- 063ade12: audience seat is a song release can now be clickable to the audience profile
- 07c28772: unlock ape button if tokenOwner request fails
- 60c7768e: Fix landing page waveform, hide avatars.
- 4bb5d3c2: cleanup profile header component query
- b8d0f76c: profileData component query refactor
- Updated dependencies [5b798f77]
- Updated dependencies [b1b50122]
- Updated dependencies [f33cbb35]
- Updated dependencies [b1b50122]
- Updated dependencies [b1b50122]
  - @sound-xyz/db@1.6.0
  - @sound-xyz/graphql-shared@1.4.0

## 3.4.1

### Patch Changes

- 6d275db2: Refactor \_app
- aca2138f: Fixes edge case in withdrawnAmount resolver
- dba116ec: queue status: separate polling from data read
- dba116ec: Add "id" to GetQueueStatus

## 3.4.0

### Minor Changes

- b9c8ce1d: SSR get eth raised query and remove unused field
- d62cc39e: Non-breaking dependencies update
- 1e1be323: View image modal + crop golden egg image
- 35321915: new crud admin api for managing shadow bans
- 35321915: Add new @graphql-ez/nextjs-testing way of testing api
- 08bbfd4f: - Fixes Withdrawn Amount in withdrawal page
  - Adds dataloaders.ts
  - Moving aggregate withdraw page calculations to backend
- 3b2e905b: waveform and release card refactoring to use releaseId as main prop and fetch data
- 9a1d7e7e: Adds dataloaders

### Patch Changes

- 0f781a41: Increase formatWeiToEth decimals points
- 93c071c1: Removes console.logs
- 7e51b8e2: Only show mintedReleases for splits in profile pages.
- 83904b2f: - Refactors withdrawnAmount resolver to use getMintInfo
  - Removes unneeded parts of GET_WITHDRAWAL_INFO
- 3b2e905b: App gql inline tags tsconfig path
- c5e35de0: Fix withdrawal page formatting usd to eth
- 5175b671: Fix: Close queue modal when queue entity is removed
- eb669531: Hides withdraw button until user has created artist profile
- 31b2c176: Prevent ape button click while `tokensOwnedByUser` is being set
- 40afae93: Adding track query. Adding container for media queries.
- c0357faf: Adds splits tab to artist and user profile pages
- f6219086: non split withdraw page query refactor
- fdd69cfd: allow normal sale
- 1e1be323: Refactor to use shorthand openModal+content when possible
- 88edd7a1: Fixes click to seek bug and sizing of waveform avatars on artist page.
- fc822010: WithdrawalData fix
- 2a490b3c: refactored queries for Withdrawal Components
- d62cc39e: Ignore "User rejected" error report
- 6f73fadf: fix two songs playing at once on autoplay ... probably
- 9b3627a7: quicken polling and fix bad request
- d62cc39e: Replace deprecated dependency "eth-sig-util"
- d62cc39e: Fix admin page mutation gql tag
- 55a2427d: Adds SplitsAddress component to release page
- d62cc39e: Add ts-nocheck to legacy generated graphql
- ca7210ff: formatEth -> formatWeiToEth
- 1e1be323: Improve openModal implementation
- Updated dependencies [d62cc39e]
- Updated dependencies [95a9a24b]
- Updated dependencies [d62cc39e]
  - @sound-xyz/db@1.5.0
  - @sound-xyz/graphql-shared@1.3.0

## 3.3.1

### Patch Changes

- 624aaa8d: Move SHADOW_BANNED_ADDRESSES to graphql-shared
- 670a132a: Adding hours to waveform
- 48bb03a0: Show secondary sales totals by song
- fb70f3cf: - Allows any user to call registerWithdrawFundsTx
  - improves error handling for withdrawal txs
- c4eb36ad: Fixes Splits.tsx sorting
- cf8765a3: Display error modal if there's an error joining the queue
- 4bca0b47: Fixes 99.99999
- 0dec1155: Remove .mp3 label from upload song button
- Updated dependencies [48bb03a0]
- Updated dependencies [624aaa8d]
  - @sound-xyz/graphql-shared@1.2.2
  - @sound-xyz/db@1.4.0

## 3.3.0

### Minor Changes

- 04428365: Updates @sounxyz package versions and fixes sort bug in Splits.tsx

### Patch Changes

- dc26b922: Only start polling on queue status with presale
- 82336665: Fix Admin page (Fix client-side constants usage of graphql-shared)
- 588e0307: Skip getSigningAddress query on non-queue enabled artists
- 7a1d5699: Fixes Hide splits balance if 0 bug
- Updated dependencies [82336665]
- Updated dependencies [82336665]
  - @sound-xyz/graphql-shared@1.2.1

## 3.2.0

### Minor Changes

- c34f9605: Move cloudfrontUri to shared constants
- ab3ca377: Move enums to shared package
- b60d8eb3: withdraw page ui fixes

  - add spinners to “select withdrawal” modal when data is loading
  - shortenHash(publicAddress) when the collaborator doesn’t have a displayName
  - double check the dropdown displayName/publicAddress against Figma designs
  - add links to the collaborator's profiles
  - add links to each release page (able to click title + album art)
  - Show some kind of UI to indicate which collaborator in the dropdown is the current user. Maybe
    just light teal (brand color) background for that row?

### Patch Changes

- 2335ddd7: Sentry: ignore user closed modal error
- 4a0bcc05: Fix flickering due to defining components inside components
- cfefeae3: Ensures lower-case addresses in CreditSplitsForm
- 4bf9a300: Enable shouldShowSplitsFeature on prod
- 80618fd1: Fix splits sorting order.
- Updated dependencies [c34f9605]
- Updated dependencies [ab3ca377]
  - @sound-xyz/graphql-shared@1.2.0

## 3.1.0

### Minor Changes

- 08a5d3a9: Add Altair GraphQL Client for non-prod deployments

### Patch Changes

- 08a5d3a9: Disable graphiql on production

## 3.0.0

### Major Changes

- d0aa601d: Stitch main schema with Queue Service schema

  This is using
  [@graphql-tools/stitch](https://www.graphql-tools.com/docs/schema-stitching/stitch-combining-schemas)
  and [Undici](https://undici.nodejs.org/#/)

### Minor Changes

- 7d821fd7: Makes gnosis multisig wallet the owner of each split
- d0aa601d: Create presale configuration right before minting new release
- e8150730: Adds roles to seed creditSplits Adds separation pipes to Splits and renames it to
  CreditSplitsDisplay Improves address valdition in CreditSplitsForm
- 8c33b50b: Update transactions whitelist status
- 5b0cde3d: - Adds withdraw page access for any creditAllocation holder
  - Hides WithdrawRelease component on new withdraw page if it hasn't received funds yet
- d0aa601d: Open queue modal when presale is enabled
- f5d30e41: - Improves form validation
  - Fixes save bug
  - Adds user avatar to CreditSplitsForm to indicate artist's address row
  - Adjusts some UI to make things more clear
- d0aa601d: - Add optional `whitelistId` field to transaction to enable cleanup whitelist on
  transaction confirmed/failed
  - Cleanup whitelist positions on confirmed/failed transactions

### Patch Changes

- 2829c28c: fixes missin MAX_AUDIO_UPLOAD_SIZE_BYTES
- d0aa601d: Refactor "isAdmin" and enable new authorization pattern with lazy promises
- 5daeb2d3: Fixes createEdition - NULL_ADDRESS for non-whitelist editions
- 609ac211: Allow mp3 file uploads
- 166bad71: Increase supported audio size to 200mb
- d0aa601d: Fix modal flashing by refactoring components wrongly-defined within another component
- Updated dependencies [e8150730]
- Updated dependencies [d0aa601d]
- Updated dependencies [d0aa601d]
- Updated dependencies [d0aa601d]
  - @sound-xyz/db@1.3.0

## 2.5.0

### Minor Changes

- 50f66868: Use our custom Web3Modal. Fixes many weird wallet issues.

### Patch Changes

- 1b130601: Adding secondary sales royalties to landing page aggregate
- a1dc7059: Update @soundxyz/web3modal to ^0.3.2 ESM version
- c71c2742: Redirects from withdraw page to landing page if user is not logged in
- 466e0e2f: Reduce login modal processing time

## 2.4.0

### Minor Changes

- bfb5be8c: - adds all the values to each row
  - implements the Disperse & Split steps
  - ensures both artists and non-artists can withdraw

### Patch Changes

- 53322ab4: Splits section description.
- b7c146f3: Fixes duplicate address bug in CreditSplitsForm
- 68af3750: Set artist opensea url in admin page
- e9fb6eec: Remove extra mint modal in splits.
- 2fe53ff5: do not show withdraw for everyone

## 2.3.0

### Minor Changes

- aad53e47: upgrades @soundxyz/protocol to 3.3.0

## 2.2.0

### Minor Changes

- 77f49356: Adds useSplitBalance hook
- 66d290b2: - moves /artist/withdraw to /user/withdraw
  - Conditionally renders the current or new withdrawal page

### Patch Changes

- 1cc338dc: Fix regression in Behind the Music see more
- Updated dependencies [d516dd40]
- Updated dependencies [ba11467f]
  - @sound-xyz/db@1.2.0

## 2.1.0

### Minor Changes

- 4dff14fc: Use [GraphQL EZ](https://www.graphql-ez.com/) for GraphQL API
- 18a227c0: Updates soundxyz protocol & common packages
- 90c47d93: Update handleConfirmedTransaction to consider presale config
- 6b4dbf0f: Finishes the credit form & split contract deployment flow:

  - Makes CreditRole an enum
  - Makes CreditSplitsForm persist data between page refreshes
  - Adds SplitsAddressComponent

- 871b7874: Adds splitBalance field to User
- f4a706a4: Fixes balanceToWithdraw resolvers
- 86bc1299: CreditSplitsForm validation
- 9f23ea81: Adds formatEth helper
- a5fb6b51: Upgrades @soundxyz/protocol in webapp - new 0xSplits deployment
- 26c775bf: Adds useWithdrawFromEdition hook
- 7a451aa8: Adds new withdrawal page mobile styles

### Patch Changes

- 86cd1518: fix: copy artist contract address on profile page
- c459bcfb: fix collected by in artist page
- a6230a08: Fix comment card size on mobile
- 59133ca9: Fixes comment card cutoff on mobile.
- 90c47d93: Optimize database queries to only request needed data
- cbdd7b83: Fixing footer links to use shared constants
- Updated dependencies [a61fd3fd]
- Updated dependencies [6b4dbf0f]
- Updated dependencies [c440761d]
- Updated dependencies [ed9340c1]
  - @sound-xyz/db@1.1.0

## 2.0.0

### Major Changes

- 17c7598c: Upgrades @soundxyz/protocol to 2.0.0

### Minor Changes

- 8c2d4e99: Separate common graphql api logic into "graphql-shared" package
- 8508e3f8: add debug apollo client ssr link (activated using DEBUG_SSR environment variable)

### Patch Changes

- 00846427: Reload webapp on client resetStore unexpected exception
- 5a19aa3c: v2 protocol deploy script bug fix
- 00c1bfe8: Improve code generation process
- d168e84b: refactor: user page query
- 8508e3f8: Fix SSR apollo client types
- 27593027: refactor: edit profile gql
- 8c2d4e99: Update Envelop dependencies to sync with
  [@envelop/core@2.0.0](https://github.com/dotansimha/envelop/releases/tag/%40envelop%2Fcore%402.0.0)
- 8c2d4e99: Refactor authentication logic into graphql-shared
- 896c1613: refactor: Latest sound card
- 00c1bfe8: Separate nexus-prisma export from @soundxyz/db
- 8c2d4e99: Refactor some test utilities into graphql-shared
- Updated dependencies [00c1bfe8]
- Updated dependencies [8c2d4e99]
- Updated dependencies [8c2d4e99]
- Updated dependencies [8c2d4e99]
- Updated dependencies [00c1bfe8]
- Updated dependencies [8c2d4e99]
  - @sound-xyz/db@1.0.1
  - @sound-xyz/graphql-shared@1.1.0

## 1.0.0

### Major Changes

- ec5f0358: Start versioning

### Patch Changes

- 97184f26: Update lockfile to February 5th
- 97184f26: Improve and fix test types
- 97184f26: Fix Login modal link typo
- 97184f26: Improve and separate dev scripts
- 97184f26: Improve webapp codegen config (specify scalar types and include server-side test
  documents)
- Updated dependencies [ec5f0358]
  - @sound-xyz/db@1.0.0
