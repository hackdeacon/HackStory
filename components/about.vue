<template>
    <div class="about-container">
        <div class="profile-section">
            <div class="avatar-container">
                <img class="avatar" src="https://www.github.com/hackdeacon.png" alt="个人头像" />
            </div>
            <h1 class="name">黑衣执事</h1>
            <p class="subtitle">前端开发者 / 设计爱好者</p>
            <div class="social-icons">
                <a href="#" title="GitHub">
                    <img src="https://cdn.simpleicons.org/github" alt="GitHub" />
                </a>
                <a href="#" title="微博">
                    <img src="https://cdn.simpleicons.org/sinaweibo" alt="微博" />
                </a>
                <a href="#" title="知乎">
                    <img src="https://cdn.simpleicons.org/zhihu" alt="知乎" />
                </a>
                <a href="#" title="邮箱">
                    <img src="https://cdn.simpleicons.org/gmail" alt="邮箱" />
                </a>
            </div>
        </div>

        <div class="cards-container">
            <div v-for="(card, index) in cards" :key="index" class="card" :class="card.class" v-lazy>
                <div class="card-header">
                    <img v-if="card.simpleIcon" :src="`https://cdn.simpleicons.org/${card.simpleIcon}`"
                        :alt="card.title" class="simple-icon" />
                    <span>{{ card.title }}</span>
                </div>
                <div class="card-content">
                    <p v-if="card.class === 'motto-card'">{{ card.content }}</p>
                    <div v-if="card.class === 'tech-card'" class="tech-tags">
                        <span class="tech-tag" v-for="tech in card.content" :key="tech">{{ tech }}</span>
                    </div>
                    <div v-if="card.class === 'hobby-card'" class="hobby-items">
                        <div class="hobby-item" v-for="hobby in card.content" :key="hobby.name">
                            <img :src="`https://cdn.simpleicons.org/${hobby.simpleIcon}`" :alt="hobby.name" />
                            <span>{{ hobby.name }}</span>
                        </div>
                    </div>
                    <div v-if="card.class === 'mbti-card'" class="mbti-content">
                        <span class="mbti-type">{{ card.content.type }}</span>
                        <p class="mbti-desc">{{ card.content.desc }}</p>
                    </div>
                    <div v-if="card.class === 'music-card'" class="music-list">
                        <div class="music-item" v-for="song in card.content" :key="song.name">
                            <img :src="song.cover" :alt="song.name" class="item-cover" />
                            <div class="music-info">
                                <p class="song-name">{{ song.name }}</p>
                                <p class="artist">{{ song.artist }}</p>
                            </div>
                        </div>
                    </div>
                    <div v-if="card.class === 'game-card'" class="game-list">
                        <div class="game-item" v-for="game in card.content" :key="game.name">
                            <img :src="game.cover" :alt="game.name" class="item-cover" />
                            <p>{{ game.name }}</p>
                        </div>
                    </div>
                    <div v-if="card.class === 'book-card'" class="book-list">
                        <div class="book-item" v-for="book in card.content" :key="book.title">
                            <img :src="book.cover" :alt="book.title" class="item-cover" />
                            <div class="book-info">
                                <p class="book-title">{{ book.title }}</p>
                                <p class="book-author">{{ book.author }}</p>
                                <div class="book-rating">
                                    <i v-for="n in 5" :key="n" :class="getStarClass(n, book.rating)"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe',
    data() {
        return {
            cards: [
                {
                    title: '座右铭',
                    simpleIcon: 'quotefancy',
                    class: 'motto-card',
                    content: '生活不止眼前的苟且，还有诗和远方。'
                },
                {
                    title: '技术栈',
                    simpleIcon: 'codeberg',
                    class: 'tech-card',
                    content: ['Vue', 'React', 'JavaScript', 'TypeScript', 'Node.js', 'CSS3', 'HTML5']
                },
                {
                    title: '兴趣爱好',
                    simpleIcon: 'angellist',
                    class: 'hobby-card',
                    content: [
                        { name: '音乐', simpleIcon: 'applemusic' },
                        { name: '阅读', simpleIcon: 'goodreads' },
                        { name: '摄影', simpleIcon: 'unsplash' },
                        { name: '编程', simpleIcon: 'visualstudiocode' },
                        { name: '游戏', simpleIcon: 'nintendoswitch' }
                    ]
                },
                {
                    title: 'MBTI',
                    simpleIcon: 'myanimelist',
                    class: 'mbti-card',
                    content: { type: 'INFJ', desc: '内向 · 直觉 · 感性 · 判断' }
                },
                {
                    title: '喜欢的音乐',
                    simpleIcon: 'spotify',
                    class: 'music-card',
                    content: [
                        { name: '歌曲名称1', artist: '艺术家1', cover: 'https://www.github.com/hackdeacon.png' },
                        { name: '歌曲名称2', artist: '艺术家2', cover: 'https://www.github.com/hackdeacon.png' }
                    ]
                },
                {
                    title: '喜欢的游戏',
                    simpleIcon: 'steam',
                    class: 'game-card',
                    content: [
                        { name: '游戏名称1', cover: 'https://www.github.com/hackdeacon.png' },
                        { name: '游戏名称2', cover: 'https://www.github.com/hackdeacon.png' },
                        { name: '游戏名称3', cover: 'https://www.github.com/hackdeacon.png' }
                    ]
                },
                {
                    title: '读书经历',
                    simpleIcon: 'bookstack',
                    class: 'book-card',
                    content: [
                        { title: '书名1', author: '作者1', cover: 'https://www.github.com/hackdeacon.png', rating: 4.5 },
                        { title: '书名2', author: '作者2', cover: 'https://www.github.com/hackdeacon.png', rating: 4 }
                    ]
                }
            ]
        };
    },
    methods: {
        getStarClass(index, rating) {
            if (index <= Math.floor(rating)) return 'fas fa-star';
            if (index === Math.ceil(rating) && rating % 1 !== 0) return 'fas fa-star-half-alt';
            return 'far fa-star';
        }
    },
    mounted() {
        const cards = this.$el.querySelectorAll('.card');
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        cards.forEach(card => observer.observe(card));
    }
}
</script>

<style scoped>
/* Global Resets and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* Base transition for subtle animations on properties not explicitly transitioned elsewhere.
       Individual elements often override this with more specific transitions. */
    transition: all 0.25s ease;
}

body {
    /* Note: This style might not apply if component is used within a larger scoped environment */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: var(--vp-c-text-1);
    background-color: var(--vp-c-bg);
}

/* Main Container */
.about-container {
    max-width: 1100px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 32px 24px;
}

/* Profile Section */
.profile-section {
    margin-bottom: 48px;
    text-align: center;
    animation: fadeIn 0.5s ease-out;
}

.avatar-container {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
}

.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: var(--vp-shadow-2);
    transition: transform 0.3s ease;
}

.avatar:hover {
    transform: scale(1.05);
}

.name {
    margin: 12px 0 8px;
    font-size: 28px;
    font-weight: 700;
    color: var(--vp-c-text-1);
}

.subtitle {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 400;
    color: var(--vp-c-text-2);
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    /* Modern way to space flex items */
}

.social-icons a {
    color: var(--vp-c-text-2);
    /* Initial color, though image is shown */
    transition: transform 0.2s ease;
}

.social-icons a:hover {
    transform: translateY(-3px);
}

.social-icons img {
    width: 24px;
    height: 24px;
    opacity: 0.8;
    /* transition for opacity is covered by '*' or could be added explicitly: transition: opacity 0.2s ease; */
}

.social-icons a:hover img {
    opacity: 1;
}

/* Cards Container */
.cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 24px;
    /* Modern way to space grid items */
}

/* Individual Card Styling */
.card {
    position: relative;
    /* For pseudo-elements like ::after */
    display: flex;
    flex-direction: column;
    height: 100%;
    /* Ensures cards in a row can be of equal height if content differs */
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    /* Subtle border */
    background-color: var(--vp-c-bg-soft);
    box-shadow: var(--vp-shadow-2);
    opacity: 0;
    /* Initial state for animation */
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0) 100%);
    /* transition for background is covered by '*' or could be added if needed */
}

.card.visible {
    animation: cardAppear 0.5s ease-out forwards;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow:
        var(--vp-shadow-3),
        0 10px 30px -10px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.1) inset;
}

.card:hover::after {
    background: linear-gradient(90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%);
}

.card-header {
    display: flex;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid var(--vp-c-divider);
    font-size: 16px;
    font-weight: 600;
    color: var(--vp-c-text-1);
}

.simple-icon {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    opacity: 0.9;
}

.card-content {
    display: flex;
    /* Allows flex-grow to work for child */
    flex-direction: column;
    flex-grow: 1;
    /* Ensures content area expands, useful if cards have different content amounts but same height */
    padding: 20px;
    gap: 12px;
    /* Spacing for direct children elements in the content */
    color: var(--vp-c-text-1);
}

/* Tech Tags Card */
.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tech-tag {
    padding: 6px 12px;
    border-radius: 20px;
    /* Pill shape */
    background-color: var(--vp-c-bg-mute);
    color: var(--vp-c-text-1);
    font-size: 14px;
    font-weight: 500;
    transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
    /* More specific transition */
}

.tech-tag:hover {
    transform: translateY(-2px);
    background-color: var(--vp-c-brand-3);
    color: var(--vp-c-white);
}

/* Hobby Card */
.hobby-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 12px;
}

.hobby-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 12px;
    /* Added padding for better spacing inside item */
    transition: transform 0.2s ease;
    /* More specific transition */
}

.hobby-item:hover {
    transform: translateY(-2px);
}

.hobby-item img {
    width: 24px;
    height: 24px;
    opacity: 0.8;
    /* transition for opacity is covered by '*' or could be added explicitly */
}

.hobby-item span {
    font-size: 14px;
    color: var(--vp-c-text-2);
}

.hobby-item:hover img {
    opacity: 1;
}

/* Music & Book List Styling (Shared) */
.music-list,
.book-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.music-item,
.book-item {
    display: flex;
    align-items: center;
    gap: 16px;
    transition: transform 0.2s ease;
    /* More specific transition */
}

.music-item:hover,
.book-item:hover {
    transform: translateY(-2px);
}

.music-item .item-cover {
    width: 50px;
    height: 50px;
    border-radius: 6px;
    object-fit: cover;
}

.book-item .item-cover {
    width: 70px;
    /* Slightly larger for books */
    height: 100px;
    border-radius: 6px;
    object-fit: cover;
}

.music-info .song-name,
.book-info .book-title {
    font-size: 15px;
    font-weight: 500;
    color: var(--vp-c-text-1);
}

.music-info .artist,
.book-info .book-author {
    margin-top: 4px;
    font-size: 13px;
    color: var(--vp-c-text-2);
}

/* Game List Styling */
.game-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 16px;
}

.game-item {
    padding: 8px;
    /* Added padding for better spacing */
    text-align: center;
    transition: transform 0.2s ease;
    /* More specific transition */
}

.game-item:hover {
    transform: translateY(-2px);
}

.game-item .item-cover {
    width: 100%;
    height: 90px;
    margin-bottom: 8px;
    border-radius: 6px;
    object-fit: cover;
}

.game-item p {
    margin-top: 4px;
    /* Ensure consistent spacing if not already there */
    font-size: 14px;
    color: var(--vp-c-text-2);
}

/* Book Rating Styling */
.book-rating {
    margin-top: 4px;
    font-size: 14px;
    color: var(--vp-c-yellow);
    /* Ensure this var is defined or use a fallback */
}

/* MBTI Card Styling */
.mbti-content {
    padding: 16px;
    /* Added padding for better spacing */
    text-align: center;
}

.mbti-type {
    margin-bottom: 10px;
    font-size: 28px;
    font-weight: 600;
    color: var(--vp-c-brand);
    /* Ensure this var is defined */
}

.mbti-desc {
    font-size: 15px;
    color: var(--vp-c-text-2);
}

/* Motto Card Specific Styling */
.motto-card .card-content {
    display: flex;
    /* Overrides default card-content flex settings if needed */
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    /* Ensure it takes available space */
    padding: 24px;
    /* Specific padding for motto */
    text-align: center;
}

.motto-card .card-content p {
    font-size: 18px;
    font-style: italic;
    color: var(--vp-c-text-1);
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes cardAppear {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Staggered Animation Delays for Cards */
.card:nth-child(1).visible {
    animation-delay: 0.1s;
}

.card:nth-child(2).visible {
    animation-delay: 0.15s;
}

.card:nth-child(3).visible {
    animation-delay: 0.2s;
}

.card:nth-child(4).visible {
    animation-delay: 0.25s;
}

.card:nth-child(5).visible {
    animation-delay: 0.3s;
}

.card:nth-child(6).visible {
    animation-delay: 0.35s;
}

.card:nth-child(7).visible {
    animation-delay: 0.4s;
}


/* Responsive Design */
@media (max-width: 1024px) {
    .cards-container {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
}

@media (max-width: 768px) {
    .about-container {
        padding: 24px 16px;
    }

    .cards-container {
        grid-template-columns: 1fr;
        /* Single column on smaller tablets/large phones */
        gap: 16px;
    }

    .name {
        font-size: 24px;
    }
}

@media (max-width: 480px) {
    .about-container {
        padding: 16px 12px;
    }

    .avatar {
        width: 100px;
        height: 100px;
    }

    .name {
        font-size: 20px;
    }

    .subtitle {
        font-size: 14px;
    }

    .hobby-items {
        grid-template-columns: repeat(3, 1fr);
        /* Adjust hobby items for small screens */
    }

    .game-list {
        grid-template-columns: repeat(2, 1fr);
        /* Adjust game items for small screens */
    }
}
</style>