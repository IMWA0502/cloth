import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-industrial',
  imports: [CommonModule],
  templateUrl: './industrial.html',
  styleUrl: './industrial.css'
})
export class Industrial implements OnInit {
  description = 'Industrial garments and technical textiles. Browse our catalog or contact us for custom orders.';
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
    const url = `${location.origin}/assets/idustria2/list.json`;
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 6000);
        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeout);

        if (!res.ok) {
          console.warn(`Attempt ${attempt}: Could not load industrial list.json`, res.status);
          this.loadError = true;
          if (attempt === 2) return;
          await this._delay(800);
          continue;
        }

        const list: string[] = await res.json();
        this.images = list.map((f) => `/assets/idustria2/${encodeURI(f)}`);
        this.loadError = false;
        return;
      } catch (err: any) {
        console.warn(`Attempt ${attempt}: Error loading industrial list:`, err && err.message ? err.message : err);
        this.loadError = true;
        if (attempt === 2) return;
        await this._delay(800);
      }
    }
  }

  private _delay(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  // If an image fails to load, hide it and log the URL so we can debug missing files
  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    console.warn('Industrial image failed to load, hiding:', img?.src);
    img.style.display = 'none';
    img.alt = 'Immagine non disponibile';
  }
}
