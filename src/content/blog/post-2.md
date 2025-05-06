---
title: My New Obsession with fault tolerant BTRFS backups.
excerpt: A breakdown of why I trust BTRFS filesystems with my bread and butter.
publishDate: 'May 6 2025'
isFeatured: true
tags:
  - Web
  - Guide
seo:
  image:
    src: 'https://images.unsplash.com/photo-1679832909602-1ccaf0cd0beb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    alt: Wavy lines
---

<img src="https://images.unsplash.com/photo-1739204334686-277b2df097ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxidXR0ZXJ8ZW58MHx8MHx8fDI%3D" />

<h3 class="font-kode-mono text-2xl">
    BTRFS as a filesystem kinda Rocks, once you get it to work
</h3>

**Just use it**
...well if you have decided to pursue a never ending pursuit of configs and environment setups. Btrfs is more of a standard nowadays. Robust and stable.
I have spent months thinking my backups were fine, till it came time to restore. This was singlehandedly the most stressfull time of 2025. Safe to say, I didnt get my files or fedora linux system back ...(Damn you NVIDIA modules).

So I decided to use a different approach. Btrfs snapshots with snapper for my root filesystem. Works like butter and after having to atttempt editing uuid's and btrfs subvolumes only for my fedora to not boot with timeshift, this was a pleasant experience.

The ability to switch back and forth between states that are time-coded and verbose is something I enjoyed with BTRFS especially coming from windows.
