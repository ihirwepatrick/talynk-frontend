import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";
import Typography from "@/constants/Typography";

type Tab = "approved" | "pending";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>("approved");

  return (
    <View className="mt-6">
      <View className="flex-row px-4">
        <TouchableOpacity
          onPress={() => setActiveTab("approved")}
          className="flex-1 pb-2"
          style={{
            borderBottomWidth: 2,
            borderBottomColor:
              activeTab === "approved"
                ? Colors.primary.main
                : Colors.border.light,
          }}
        >
          <Text
            style={{
              color:
                activeTab === "approved"
                  ? Colors.primary.main
                  : Colors.text.secondary,
              fontFamily: Typography.fonts.medium,
              fontSize: Typography.sizes.base,
            }}
            className="text-center"
          >
            Approved
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab("pending")}
          className="flex-1 pb-2"
          style={{
            borderBottomWidth: 2,
            borderBottomColor:
              activeTab === "pending"
                ? Colors.primary.main
                : Colors.border.light,
          }}
        >
          <Text
            style={{
              color:
                activeTab === "pending"
                  ? Colors.primary.main
                  : Colors.text.secondary,
              fontFamily: Typography.fonts.medium,
              fontSize: Typography.sizes.base,
            }}
            className="text-center"
          >
            Pending
          </Text>
        </TouchableOpacity>
      </View>

      <View className="p-4">
        {activeTab === "approved" ? (
          <Text style={{ color: Colors.text.secondary }}>
            Approved content will appear here
          </Text>
        ) : (
          <Text style={{ color: Colors.text.secondary }}>
            Pending content will appear here
          </Text>
        )}
      </View>
    </View>
  );
};

export default ProfileTabs;
