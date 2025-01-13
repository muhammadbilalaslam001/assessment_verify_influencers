enum FilterType{
    ALL="All",
    NUTRITION="Nutrition",
    FITNESS="Fitness",
    MEDICINE="Medicine",
    MENTAL_HEALTH="Mental Health",
    LONGEVITY='Longevity'
}

enum Trend{
    UP='up',
    DOWN='down'
}

enum Category {
  NUTRITION = "Nutrition",
  FITNESS = "Fitness",
  MEDICINE = "Medicine",
  MENTAL_HEALTH = "Mental Health",
  LONGEVITY='Longevity'
}

enum NavOptions{
  CLAIM_ANALYSIS="Claims Analysis",
  RECOMMENDED_PRODUCTS="Recommended Products",
  MONETIZATION="Monetization"
}

enum VerificationStatus{
  VERIFIED="verified",
  QUESTIONABLE="questionable",
  DEBUNKED="debunked"
}

export {FilterType,Trend,Category,NavOptions,VerificationStatus}