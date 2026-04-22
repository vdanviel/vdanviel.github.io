const modal = document.getElementById("mediaModal");
const mediaListEl = document.getElementById("mediaList");

function closeMediaModal() {
    
    modal.classList.add("hidden");
    document.body.style.overflow = 'auto'; 


}

function openMediaModal(urls) {

    mediaListEl.innerHTML = '';

    const htmlContent = urls.map((url) => {
        
        return `
            <a target="_blank" href="${url}" class="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 group">
                <img src="${url}" class="w-full h-full object-cover group-hover:scale-110 duration-500 transition-transform">
            </a>
        `

    });

    mediaListEl.innerHTML = htmlContent.join('');

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
}