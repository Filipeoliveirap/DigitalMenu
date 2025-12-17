package com.digitalmenu.backend.infrastructure.shared.utils;

public class MaskUtils {
    public static String maskTelephone(String telephone) {
        if (telephone == null || telephone.length() != 11) return telephone;
        return telephone.substring(0,2) + " *****-" + telephone.substring(7);
    }
}
