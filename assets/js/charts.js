// Chart.js Configuration and Data Visualizations

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {

    // Revenue Growth Chart
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Revenue (₹ Lakhs)',
                    data: [45, 52, 48, 65, 72, 78, 85, 92, 88, 105, 115, 125],
                    borderColor: '#1890ff',
                    backgroundColor: 'rgba(24, 144, 255, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#1890ff',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            font: {
                                family: 'Inter',
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleFont: {
                            size: 14,
                            family: 'Inter'
                        },
                        bodyFont: {
                            size: 13,
                            family: 'Inter'
                        },
                        callbacks: {
                            label: function (context) {
                                return context.dataset.label + ': ₹' + context.parsed.y + ' Lakhs';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11
                            },
                            callback: function (value) {
                                return '₹' + value;
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11
                            }
                        }
                    }
                }
            }
        });
    }

    // Customer Segmentation Chart
    const customerCtx = document.getElementById('customerChart');
    if (customerCtx) {
        new Chart(customerCtx, {
            type: 'doughnut',
            data: {
                labels: ['New Customers', 'Returning', 'VIP/High Value', 'At Risk'],
                datasets: [{
                    data: [35, 40, 15, 10],
                    backgroundColor: [
                        '#1890ff',
                        '#13c2c2',
                        '#52c41a',
                        '#faad14'
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 3,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: {
                                family: 'Inter',
                                size: 12
                            },
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleFont: {
                            size: 14,
                            family: 'Inter'
                        },
                        bodyFont: {
                            size: 13,
                            family: 'Inter'
                        },
                        callbacks: {
                            label: function (context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                return label + ': ' + value + '%';
                            }
                        }
                    }
                },
                cutout: '65%'
            }
        });
    }

    // ROI Chart (for Services page)
    const roiCtx = document.getElementById('roiChart');
    if (roiCtx) {
        new Chart(roiCtx, {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    label: 'Marketing ROI (%)',
                    data: [145, 165, 185, 210],
                    backgroundColor: 'rgba(24, 144, 255, 0.8)',
                    borderColor: '#1890ff',
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            font: {
                                family: 'Inter',
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        callbacks: {
                            label: function (context) {
                                return 'ROI: ' + context.parsed.y + '%';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11
                            },
                            callback: function (value) {
                                return value + '%';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11
                            }
                        }
                    }
                }
            }
        });
    }

    // Sales Performance Chart (for Case Studies)
    const salesCtx = document.getElementById('salesChart');
    if (salesCtx) {
        new Chart(salesCtx, {
            type: 'bar',
            data: {
                labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
                datasets: [{
                    label: 'Before Analytics',
                    data: [65, 45, 80, 55, 70],
                    backgroundColor: 'rgba(156, 163, 175, 0.6)',
                    borderColor: 'rgba(107, 114, 128, 1)',
                    borderWidth: 1,
                    borderRadius: 6
                }, {
                    label: 'After Analytics',
                    data: [95, 78, 110, 88, 105],
                    backgroundColor: 'rgba(24, 144, 255, 0.8)',
                    borderColor: '#1890ff',
                    borderWidth: 1,
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                family: 'Inter',
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11
                            }
                        }
                    }
                }
            }
        });
    }
});
