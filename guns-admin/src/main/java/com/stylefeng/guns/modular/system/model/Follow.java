package com.stylefeng.guns.modular.system.model;

import java.util.List;

public class Follow {

    private FollowH followH;

    private FollowFeatures followFeatures;

    private FlFollowEvent flFollowEvent;

    private FlFollowMedicine flFollowMedicine;

    private FlFollowResult flFollowResult;


    public FollowH getFollowH() {
        return followH;
    }

    public void setFollowH(FollowH followH) {
        this.followH = followH;
    }

    public FollowFeatures getFollowFeatures() {
        return followFeatures;
    }

    public void setFollowFeatures(FollowFeatures followFeatures) {
        this.followFeatures = followFeatures;
    }

    public FlFollowEvent getFlFollowEvent() {
        return flFollowEvent;
    }

    public void setFlFollowEvent(FlFollowEvent flFollowEvent) {
        this.flFollowEvent = flFollowEvent;
    }

    public FlFollowMedicine getFlFollowMedicine() {
        return flFollowMedicine;
    }

    public void setFlFollowMedicine(FlFollowMedicine flFollowMedicine) {
        this.flFollowMedicine = flFollowMedicine;
    }

    public FlFollowResult getFlFollowResult() {
        return flFollowResult;
    }

    public void setFlFollowResult(FlFollowResult flFollowResult) {
        this.flFollowResult = flFollowResult;
    }
}
