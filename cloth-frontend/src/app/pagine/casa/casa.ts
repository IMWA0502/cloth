import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casa',
  imports: [CommonModule],
  templateUrl: './casa.html',
  styleUrl: './casa.css'
})
export class Casa implements OnInit {
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
    const url = `${location.origin}/assets/home/list.json`;
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 6000);
        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeout);

        if (!res.ok) {
          console.warn(`Attempt ${attempt}: Could not load home list.json`, res.status);
          this.loadError = true;
          if (attempt === 2) return;
          await this._delay(800);
          continue;
        }

        const list: string[] = await res.json();
        this.images = list.map((f) => `/assets/home/${encodeURI(f)}`);
        this.loadError = false;
        return;
      } catch (err: any) {
        console.warn(`Attempt ${attempt}: Error loading home list:`, err && err.message ? err.message : err);
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
    console.warn('Casa image failed to load, hiding:', img?.src);
    img.style.display = 'none';
    img.alt = 'Immagine non disponibile';
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  /**
   * Return true for images that should be visually enlarged.
   * User requested the 4th image (1-based), so we enlarge index 3 (zero-based).
   */
  isEnlarged(index: number) {
    return index === 3;
  }

}
