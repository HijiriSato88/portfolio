// アニメーション設定のcomposable
interface AnimationTransition {
  duration: number;
  delay?: number;
  ease: string;
}

interface AnimationConfig {
  initial: {
    opacity: number;
    x?: number;
    y?: number;
  };
  visibleOnce: {
    opacity: number;
    x?: number;
    y?: number;
    transition: AnimationTransition;
  };
}

type AnimationDirection = 'left' | 'right';

export const useAnimations = () => {
  // セクションタイトル用のアニメーション
  const sectionTitleAnimation: AnimationConfig = {
    initial: { opacity: 0, y: 40 },
    visibleOnce: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1000, ease: 'easeOutQuart' } 
    }
  }

  // カード/アイテム用のアニメーション（下からスライドイン）
  const slideUpAnimation = (delay: number = 0): AnimationConfig => ({
    initial: { opacity: 0, y: 50 },
    visibleOnce: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 800, 
        delay: delay, 
        ease: 'easeOutQuart' 
      } 
    }
  })

  // 左右交互のスライドイン（タイムライン用）
  const alternateSlideAnimation = (index: number, baseDelay: number = 200): AnimationConfig => ({
    initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visibleOnce: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 800, 
        delay: baseDelay + (index * 200), 
        ease: 'easeOutQuart' 
      } 
    }
  })

  // 左右からのスライドイン（About用）
  const slideFromSideAnimation = (
    direction: AnimationDirection = 'left', 
    delay: number = 300
  ): AnimationConfig => ({
    initial: { opacity: 0, x: direction === 'left' ? -50 : 50 },
    visibleOnce: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 1200, 
        delay: delay, 
        ease: 'easeOutQuart' 
      } 
    }
  })

  return {
    sectionTitleAnimation,
    slideUpAnimation,
    alternateSlideAnimation,
    slideFromSideAnimation
  }
}

// 型エクスポート（他のファイルで使用可能）
export type { AnimationConfig, AnimationDirection } 