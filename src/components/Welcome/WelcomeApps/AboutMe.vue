<template>
  <div id="aboutme">
    <nav id="aboutme-left">
      <div id="aboutme-left-avatar">
        <img :src="avatar" alt="avatar" width="100" height="100" />
      </div>
      <div id="aboutme-left-content">
        <h1>{{ $t('about_me') }}</h1>
        <p>{{ $t('welcome_bio') }}</p>
      </div>
    </nav>
    <main id="aboutme-center">
      <nav id="aboutme-center-content">
        <div id="aboutme-left-avatar">
          <img :src="avatar" alt="avatar" width="100" height="100" />
        </div>
        <div id="aboutme-left-content">
          <h1>{{ $t('about_me') }}</h1>
          <p>{{ $t('welcome_bio') }}</p>
        </div>
      </nav>
      <h1>
        {{ $t('hello') }}
        <small>{{ $t('programming_languages') }}</small>
      </h1>
      <p dir="auto" id="aboutme-center-previews">
        <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/5ce0e0f16802ef00e28624c8168d43895999810c141a235cd7a7bc7f3d2b362b/68747470733a2f2f6769746875622d70726f66696c652d73756d6d6172792d63617264732e76657263656c2e6170702f6170692f63617264732f70726f66696c652d64657461696c733f757365726e616d653d746164657562646576267468656d653d767565">
          <img src="https://camo.githubusercontent.com/5ce0e0f16802ef00e28624c8168d43895999810c141a235cd7a7bc7f3d2b362b/68747470733a2f2f6769746875622d70726f66696c652d73756d6d6172792d63617264732e76657263656c2e6170702f6170692f63617264732f70726f66696c652d64657461696c733f757365726e616d653d746164657562646576267468656d653d767565" alt="" data-canonical-src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=tadeubdev&amp;theme=vue" style="max-width: 100%;">
        </a>
        <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/a9bcffff0ebc11f21b8429326aeb0422a3897af9d4027b28cc33350a587175c0/68747470733a2f2f6769746875622d70726f66696c652d73756d6d6172792d63617264732e76657263656c2e6170702f6170692f63617264732f7265706f732d7065722d6c616e67756167653f757365726e616d653d746164657562646576267468656d653d767565">
          <img src="https://camo.githubusercontent.com/a9bcffff0ebc11f21b8429326aeb0422a3897af9d4027b28cc33350a587175c0/68747470733a2f2f6769746875622d70726f66696c652d73756d6d6172792d63617264732e76657263656c2e6170702f6170692f63617264732f7265706f732d7065722d6c616e67756167653f757365726e616d653d746164657562646576267468656d653d767565" alt="" data-canonical-src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=tadeubdev&amp;theme=vue" style="max-width: 100%;">
        </a>
        <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/c31581c1578999ad49622940e8936fcf4d43c0c23dcb94f6a05c87c2b81f9cd5/68747470733a2f2f6769746875622d70726f66696c652d73756d6d6172792d63617264732e76657263656c2e6170702f6170692f63617264732f6d6f73742d636f6d6d69742d6c616e67756167653f757365726e616d653d746164657562646576267468656d653d767565">
          <img src="https://camo.githubusercontent.com/c31581c1578999ad49622940e8936fcf4d43c0c23dcb94f6a05c87c2b81f9cd5/68747470733a2f2f6769746875622d70726f66696c652d73756d6d6172792d63617264732e76657263656c2e6170702f6170692f63617264732f6d6f73742d636f6d6d69742d6c616e67756167653f757365726e616d653d746164657562646576267468656d653d767565" alt="" data-canonical-src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=tadeubdev&amp;theme=vue" style="max-width: 100%;">
        </a>
        <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/de674be8bde900def80d53b07253bd749c9ff14806f0ada06ae035795a677db9/68747470733a2f2f6769746875622d70726f66696c652d73756d6d6172792d63617264732e76657263656c2e6170702f6170692f63617264732f73746174733f757365726e616d653d746164657562646576267468656d653d767565">
          <img src="https://camo.githubusercontent.com/de674be8bde900def80d53b07253bd749c9ff14806f0ada06ae035795a677db9/68747470733a2f2f6769746875622d70726f66696c652d73756d6d6172792d63617264732e76657263656c2e6170702f6170692f63617264732f73746174733f757365726e616d653d746164657562646576267468656d653d767565" alt="" data-canonical-src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=tadeubdev&amp;theme=vue" style="max-width: 100%;">
        </a>
        <a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/2203c56ecf9aaca40a7098dbb1fce466294e5ee44fb9eb6645ca142312da0aa8/68747470733a2f2f6769746875622d70726f66696c652d73756d6d6172792d63617264732e76657263656c2e6170702f6170692f63617264732f70726f647563746976652d74696d653f757365726e616d653d746164657562646576267468656d653d767565">
          <img src="https://camo.githubusercontent.com/2203c56ecf9aaca40a7098dbb1fce466294e5ee44fb9eb6645ca142312da0aa8/68747470733a2f2f6769746875622d70726f66696c652d73756d6d6172792d63617264732e76657263656c2e6170702f6170692f63617264732f70726f647563746976652d74696d653f757365726e616d653d746164657562646576267468656d653d767565" alt="" data-canonical-src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=tadeubdev&amp;theme=vue" style="max-width: 100%;">
        </a>
      </p>
    </main>
  </div>
</template>

<script>
import avatar from '@/assets/images/avatar-2.jpg';

export default {
  name: 'AboutMe',
  data() {
    return {
      avatar,
    };
  },
}
</script>

<style scoped>
#aboutme {
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100%;
}
#aboutme-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #DDD;
  color: #333;
}
#aboutme-left img {
  border-radius: 50%;
}
#aboutme-left-content h1 {
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
}
#aboutme-left-content p {
  color: #333;
  text-align: center;
}
#aboutme-center-content {
  display: none;
}
#aboutme-center {
  padding: 3.5rem 4rem;
  background-color: #FFF;
  color: #333;
  overflow-y: auto;
}
#aboutme-center > h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dotted #DDD;
}
#aboutme-center > h1 small {
  display: block;
  font-size: 0.4em;
  font-weight: 100;
  color: #666;
}
#aboutme-center-previews {
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  gap: 10px;
}
@media screen and (max-width: 768px) {
  #aboutme {
    grid-template-columns: 1fr;
  }
  #aboutme-left {
    display: none;
  }
  #aboutme-center {
    overflow-y: auto;
    text-align: center;
  }
  #aboutme-center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-bottom: 20px;
  }
  #aboutme-center > h1 {
    font-size: 2rem;
    margin-bottom: 0;
    padding-bottom: 0;
    border: none;
  }
}
</style>
