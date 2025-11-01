import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitchen',
  imports: [CommonModule],
  templateUrl: './kitchen.html',
  styleUrl: './kitchen.css'
})
export class Kitchen implements OnInit {
  images: string[] = [];
  loadError = false;
  private _fetched = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this._fetched) return;
    this._fetched = true;
    this._loadImages();
  }

  async _loadImages() {
    const url = `${location.origin}/assets/kitchen/list.json`;
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 6000);
        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeout);

        if (!res.ok) {
          console.warn(`Attempt ${attempt}: Could not load kitchen list.json`, res.status);
          this.loadError = true;
          if (attempt === 2) return;
          await this._delay(800);
          continue;
        }

        const list: string[] = await res.json();
        this.images = list.map((f) => `/assets/kitchen/${encodeURI(f)}`);
        this.loadError = false;
        return;
      } catch (err: any) {
        console.warn(`Attempt ${attempt}: Error loading kitchen list:`, err && err.message ? err.message : err);
        this.loadError = true;
        if (attempt === 2) return;
        await this._delay(800);
      }
    }
  }

  private _delay(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    console.warn('Kitchen image failed to load, hiding:', img?.src);
    img.style.display = 'none';
    img.alt = 'Immagine non disponibile';
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

}
