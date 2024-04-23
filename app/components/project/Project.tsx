import React from "react";
import PerProject from "./PerProject";

const Project = () => {
  return (
    <div className="py-[80px] px-[156px]">
      <p className="w-full text-[#FD7092] font-bold text-[148px] text-center mb-[64px]">
        Project
      </p>
      <div>
        <div className="flex justify-center gap-x-[24px] mb-[24px]">
          <PerProject
            imgTitle="PKM"
            title="Project Visualization"
            width={549}
            desc="In this project, I created a visualization dashboard using Google Looker Studio and Spredsheet. This dashboard provides information about the achievements of PKM titles from 2020 to 2023."
            link="https://lookerstudio.google.com/embed/u/0/reporting/6b057950-643f-415f-983b-83992a34d0ac/page/lLnhD"
            tasks={[
              "Data Preprocessing",
              "EDA (Exploratory Data Analysis)",
              "Dashboard Visualization",
            ]}
          />
          <PerProject
            imgTitle="tracerStudy"
            title="Project Visualization"
            width={549}
            desc="In this project, I created a visualization dashboard using Google Looker Studio and Spredsheet. This dashboard displays data on the number of graduates based on universities that have Tracer Study accounts. Additionally, the information also covers the period from 2020 to 2023."
            link="https://lookerstudio.google.com/embed/u/0/reporting/2c1f9c17-37b4-45c2-be39-4213f201323c/page/LW6kD"
            tasks={[
              "Data Preprocessing",
              "EDA (Exploratory Data Analysis)",
              "Dashboard Visualization",
            ]}
          />
        </div>
        <div className="flex justify-center gap-x-[24px]">
          <PerProject
            imgTitle="heartRate"
            title="Heart Disease Classification"
            width={360}
            desc="In this project, I constructed a classification model utilizing algorithms such as Random Forest, CatBoost, and Decision Tree Classifier. The objective of this model is to categorize individuals based on whether they have heart disease or not."
            link="https://lookerstudio.google.com/embed/u/0/reporting/6b057950-643f-415f-983b-83992a34d0ac/page/lLnhD"
            tasks={[
              "Data Preprocessing",
              "EDA (Exploratory Data Analysis)",
              "Data Splitting",
              "Modelling",
              "Evaluation",
            ]}
          />
          <PerProject
            imgTitle="FinalProject"
            title="Predictive Maintenance Machine Failur"
            width={360}
            desc="In this project, I created a Prediction Model using
            various prediction algorithms such as Random Forest
            and Decision Tree. This model aims to predict
            machine failures. Additionally, I identified important
            features that determine the likelihood of machine
            failure within this project"
            link="https://lookerstudio.google.com/embed/u/0/reporting/6b057950-643f-415f-983b-83992a34d0ac/page/lLnhD"
            tasks={[
              "Data Preprocessing",
              "EDA (Exploratory Data Analysis)",
              "Data Splitting",
              "Hyperparameter Tuning",
              "Modelling",
              "Evaluation",
            ]}
          />
          <PerProject
            imgTitle="FoodRecipe"
            title="Food Recipe Recommendation System"
            width={360}
            desc="In this project, I developed a recommendation
            system model using the SVD algorithm. This
            recommendation system model provides food recipe
            recommendations based on user preferences,
            utilizing rating data"
            link="https://lookerstudio.google.com/embed/u/0/reporting/6b057950-643f-415f-983b-83992a34d0ac/page/lLnhD"
            tasks={[
              "Data Preprocessing",
              "EDA (Exploratory Data Analysis)",
              "Data Splitting",
              "Hyperparameter Tuning",
              "Modelling",
              "Evaluation",
              "Top-10 Recommendation",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;