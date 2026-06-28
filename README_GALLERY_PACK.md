# Greenhouse House Rental – gallery asset pack

Wypakuj zawartość tej paczki bezpośrednio w katalogu głównym projektu:

`C:\Users\pzand\WebDev\greenhouse-house-rental`

Paczka zawiera:

- `public/images/fern-house/*.webp` – 4 obrazy Fern House
- `public/images/olive-house/*.webp` – 5 obrazów Olive House
- `src/data/gallery.ts` – dane galerii z polami `imageSrc`
- `src/types/site.ts` – typ `GalleryItem` rozszerzony o `imageSrc`
- `src/components/sections/GalleryPreview.tsx` – podgląd galerii z prawdziwymi obrazami
- `src/app/[locale]/gallery/page.tsx` – pełna galeria z prawdziwymi obrazami
- `src/app/favicon.ico`, `src/app/icon.svg`, `public/favicon.svg` – pierwsza wersja faviconu/ikony

Po wypakowaniu uruchom lokalnie:

```powershell
npm.cmd run dev
```

Sprawdź:

```txt
http://localhost:3000/en
http://localhost:3000/en/gallery
http://localhost:3000/pl/gallery
http://localhost:3000/ceb/gallery
```

Potem test builda:

```powershell
npm.cmd run build
```

Jeżeli wszystko działa, commit:

```powershell
git status
git add .
git commit -m "Add generated gallery images and favicon"
git push origin main
git tag -a v0.0.5 -m "v0.0.5 - generated gallery images and favicon"
git push origin v0.0.5
```
