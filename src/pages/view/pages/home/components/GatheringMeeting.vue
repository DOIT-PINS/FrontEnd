<template>
  <div id="gathering-meeting">
    <div class="header">
      <div class="title">모집중인 모임</div>
      <div class="sub">지금 모집중인 우리 학교 모임들을 소개합니다</div>
    </div>
    <div class="object-view">
      <div class="object">
        <div class="image">
          <img src="@/pages/view/pages/home/assets/Image.png" alt="">
        </div>
        <div class="data-area">
          <div class="tags">
            <BaseBadge type="type2" class="tag">동아리</BaseBadge>
            <BaseBadge type="type2" class="tag">IT/개발</BaseBadge>
          </div>
          <div class="name">DO IT</div>
          <div class="description">개인과 팀 모두가 함께 성장하는 IT 개발협업동아리입니다.</div>
          <div class="date-group">
            <img src="@/pages/view/pages/home/assets/calendar.svg" alt="">
            <div class="bold">모집기간</div>
            <div class="text">24. 12. 27 - 24. 12. 13</div>
          </div>
          <div class="people-group">
            <img src="@/pages/view/pages/home/assets/people.svg" alt="">
            <div class="bold">멤버</div>
            <div class="text">30명</div>
          </div>
        </div>
      </div>
      <div class="object">
        <div class="image">
          <img src="@/pages/view/pages/home/assets/sophie-peng-ebumUeJ-5r8-unsplash 1.png" alt="">
        </div>
        <div class="data-area">
          <div class="tags">
            <BaseBadge type="type2" class="tag">동아리</BaseBadge>
            <BaseBadge type="type2" class="tag">공연</BaseBadge>
          </div>
          <div class="name">들빛</div>
          <div class="description">낭만있는 버스킹, 중앙힐링밴드동아리 들빛</div>
          <div class="date-group">
            <img src="@/pages/view/pages/home/assets/calendar.svg" alt="">
            <div class="bold">모집기간</div>
            <div class="text">2024. 2. 28 - 2024. 3. 8</div>
          </div>
          <div class="people-group">
            <img src="@/pages/view/pages/home/assets/people.svg" alt="">
            <div class="bold">멤버</div>
            <div class="text">46명</div>
          </div>
        </div>
      </div>
      <div class="object">
        <div class="image">
          <img src="@/pages/view/pages/home/assets/mintosko-V4b2j7f1dfc-unsplash 1.png" alt="">
        </div>
        <div class="data-area">
          <div class="tags">
            <BaseBadge type="type2" class="tag">동아리</BaseBadge>
            <BaseBadge type="type2" class="tag">차량·오토바이</BaseBadge>
          </div>
          <div class="name">YONSEI WASH</div>
          <div class="description">자동차를 좋아하는 분들을 위한 소모임, 연세워시</div>
          <div class="date-group">
            <img src="@/pages/view/pages/home/assets/calendar.svg" alt="">
            <div class="bold">모집기간</div>
            <div class="text">상시모집</div>
          </div>
          <div class="people-group">
            <img src="@/pages/view/pages/home/assets/people.svg" alt="">
            <div class="bold">멤버</div>
            <div class="text">52명</div>
          </div>
        </div>
      </div>
      <div class="object">
        <div class="image">
          <img src="@/pages/view/pages/home/assets/xuanming-U5epRU6sY_A-unsplash 1.png" alt="">
        </div>
        <div class="data-area">
          <div class="tags">
            <BaseBadge type="type2" class="tag">동아리</BaseBadge>
            <BaseBadge type="type2" class="tag">스포츠</BaseBadge>
          </div>
          <div class="name">스날</div>
          <div class="description">연세대학교 미래캠퍼스 중앙배드민턴동아리 스날</div>
          <div class="date-group">
            <img src="@/pages/view/pages/home/assets/calendar.svg" alt="">
            <div class="bold">모집기간</div>
            <div class="text">2024. 2. 19 - 2024. 3. 6</div>
          </div>
          <div class="people-group">
            <img src="@/pages/view/pages/home/assets/people.svg" alt="">
            <div class="bold">멤버</div>
            <div class="text">89명</div>
          </div>
        </div>
      </div>
    </div>
    <div class="gurad">
      <base-button 
        mode='moreGatheringGroup' 
        link='true' 
        :to="{ name: 'auth-signup' }"
        class="buttons"
      >
        더보기
        <img src="@/pages/view/pages/home/assets/MoreGroup.svg">
      </base-button>
    </div>
    
  </div>
</template>

<script>
import BaseBadge from '@/components/BaseBadge.vue';
import BaseButton from '@/components/BaseButton.vue';


export default {
  components: {
    BaseBadge,
    BaseButton
  }
  
}
</script>

<style lang="scss" scoped>
#gathering-meeting{
  margin-bottom: 53px;
  .header{
    margin: 41px 20px 20px 20px;
    .title{
      text-align: left;
      color: var(--netural-15, #1B1C1E);
      font-family: SUITE;
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px; /* 136.364% */
      letter-spacing: -0.44px;
    }
    .sub{
      text-align: left;
      color: var(--netural-50, #70737C);
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 166.667% */
      letter-spacing: -0.24px;
    }
  }
  .object-view{
    display: flex;
    margin: 0 20px;
    flex-direction: column;
    .object{
      display: flex;
      margin-bottom: 24px;
      img{
        border-radius: 10px;
      }

      &:last-child {
        margin-bottom: 0;
      }

      .data-area{
        display: flex;
        flex-direction: column;
        margin: 8px 0 8px 12px;
        align-items: flex-start;
        .tags{
          display: flex;
          .tag{
            margin-right: 4px;
          }
        }
        .name{
          margin-top: 14px;
          color: var(--netural-15, #1B1C1E);
          font-feature-settings: 'ss10' on;
          font-family: SUITE;
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: 24px; /* 150% */
          letter-spacing: -0.32px;
        }
        .description{

          margin: 4px 0 18px 0;
          text-align: left;

          width: calc(var(--window-width) - 166px);
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          
          overflow: hidden;
          color: var(--netural-60, #878A93);
          font-family: Pretendard;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 166.667% */
          letter-spacing: -0.24px;
        }
        .date-group{
          margin-bottom: 8px;
        }
        .date-group, .people-group {
          display: flex;
          .bold{
            margin-left: 8px;
            color: var(--netural-40, #5A5C63);
            font-family: Pretendard;
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
            line-height: 14px; /* 140% */
            letter-spacing: -0.2px;
          }
          .text{
            margin-left: 5px;
            color: var(--netural-40, #5A5C63);
            font-family: Pretendard;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 14px; /* 140% */
            letter-spacing: -0.2px;
          }
        }
      }
    }
  }
  .gurad{
    margin-top: 24px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 107px;
    display: flex;
    justify-content: center;
    .buttons{
      img{
        margin-left: 4px;
      }
    }
  }
}
</style>